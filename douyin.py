import gzip
import json
import logging
import os
import re
import time
from datetime import datetime

import requests
import websockets
import pandas as pd
import config
import live_rank
from protobuf import dy_pb2
from utils.logger import logger


class DouyinMessage:
    def __init__(self, time: str, type: str, user_name: str, content: str):
        self.time = time
        self.type = type
        self.user_name = user_name
        self.content = content


class Douyin:

    def __init__(self, url, on_message):
        self.ws_conn = None
        self.url = url
        self.room_info = None
        self.__on_message__ = on_message
        self.chat_messages = pd.DataFrame(columns=['时间', '用户', '性别', '消息'])
        self.gift_messages = pd.DataFrame(columns=['时间', '用户', '礼物', '数量'])
        self.like_messages = pd.DataFrame(columns=['时间', '用户', '点赞次数'])
        self.member_messages = pd.DataFrame(columns=['时间', '用户'])
        # 拼接出 Excel 文件名
        formatted_time = datetime.now().strftime("%Y-%m-%d-%H-%M-%S") + '_'
        filename = f"{url.split('/')[-1]}"
        self.file_name = 'LiveMsg' + formatted_time + filename + config.content['Live_File_Type']
        self.user_file = 'UserMsg' + formatted_time + filename + config.content['User_File_Type']
        self.message_count = 0  # 初始化消息计数器
        self.gift_values = self.load_gift_values()
        self.user_last_gift_value = {}

    def start_douyin_stream(url):
        dy = Douyin(url)
        dy.connect_web_socket()

    def _get_room_info(self):
        payload = {}

        headers = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36',
            'cookie': 'msToken=feWMlseXLj6d3ha2Z8OQtFfw91vOTJoZCEtX2iqI8eB3Ri_2hLbToEbZj3CMwmieqBkwe9zGxVBB_m7I3017Qn6pyfBx45HTo7thNws-AbXdMJivoWM=; passport_fe_beating_status=false; IsDouyinActive=false; __ac_nonce=0658bdcc70075c7f880b6; __ac_signature=_02B4Z6wo00f01WL61bgAAIDDKmGM9fED9TFi2tEAAD056c;',
        }

        proxies = dict(http="", https="")

        response = requests.get(self.url, headers=headers, data=payload, proxies=proxies)
        res_cookies = response.cookies
        ttwid = res_cookies.get_dict().get("ttwid")
        res_origin_text = response.text
        re_pattern_room_id = r'\\"roomId\\":\\"(.*?)\\"'
        re_obj_room_id = re.compile(re_pattern_room_id)
        matches_room_id = re_obj_room_id.findall(res_origin_text)
        live_room_id = live_room_title = None
        for match_item in matches_room_id:
            if len(match_item) == 19:
                live_room_id = match_item
        re_pattern_title = r'"live-room-name">(.*?)</h1>'
        re_obj_title = re.compile(re_pattern_title)
        matches_title = re_obj_title.findall(res_origin_text)
        for match_item in matches_title:
            if len(match_item) > 0:
                live_room_title = match_item

        self.room_info = {
            'url': self.url,
            'ttwid': ttwid,
            'room_id': live_room_id,
            'room_title': live_room_title,
        } if live_room_id else None

    async def connect_web_socket(self):
        self._get_room_info()
        if self.room_info is None:
            logging.error(f"获取直播间({self.url})信息失败")
            raise Exception(f"获取直播间({self.url})信息失败")
        ret = self.parseLiveRoomUrl()
        room_id = self.room_info.get('room_id')
        if not ret:
            raise Exception(f"直播间({room_id})还未开播")

        ws_url = config.content['ws']['origin_url']
        ws_url = ws_url.replace("${room_id}", room_id)
        print(ws_url)
        print("room_info", self.room_info)
        headers = {
            'cookie': 'ttwid=' + self.room_info.get('ttwid'),
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36'
        }
        try:
            async with websockets.connect(ws_url, extra_headers=headers) as ws_conn:
                logger.info("直播间连接成功，等待消息推送")
                self.ws_conn = ws_conn
                success_message = DouyinMessage("control", "connect_success", "", "抖音弹幕链接成功")
                await self.__on_message__( success_message)
                await self._on_open(self.ws_conn)
                async for message in ws_conn:
                    await self._on_message(self.ws_conn, message)
        except websockets.ConnectionClosedError as e:
            logger.error(e)
            logger.error("直播间连接已关闭")
            await self._on_close(e, self.ws_conn, 'close')
        except Exception as e:
            logger.error(e)
            logger.error("直播间连接异常")
            await self._on_error(e, self.ws_conn)

    def parseLiveRoomUrl(self):
        """
        解析直播的弹幕websocket地址
        :param url:直播地址
        :return:
        """
        # h = {
        #     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        #     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        #     'cookie': '__ac_nonce=0638733a400869171be51',
        # }
        h = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36',
            'cookie': 'msToken=feWMlseXLj6d3ha2Z8OQtFfw91vOTJoZCEtX2iqI8eB3Ri_2hLbToEbZj3CMwmieqBkwe9zGxVBB_m7I3017Qn6pyfBx45HTo7thNws-AbXdMJivoWM=; passport_fe_beating_status=false; IsDouyinActive=false; __ac_nonce=0658bdcc70075c7f880b6; __ac_signature=_02B4Z6wo00f01WL61bgAAIDDKmGM9fED9TFi2tEAAD056c;',
        }

        res = requests.get(url=self.url, headers=h)
        global ttwid, roomStore, liveRoomId, liveRoomTitle, live_stream_url
        data = res.cookies.get_dict()
        ttwid = data['ttwid']
        res = res.text
        res_room = re.search(r'roomId\\":\\"(\d+)\\"', res)
        # 获取直播主播的uid和昵称等信息
        live_room_search = re.search(r'owner\\":(.*?),\\"room_auth', res)
        if not live_room_search:
            print("未获取到live_room信息,直播间可能已经关闭")
            return False
        # 如果没有获取到live_room信息，很有可能是直播已经关闭了，待优化
        live_room_res = live_room_search.group(1).replace('\\"', '"')
        live_room_info = json.loads(live_room_res)
        print(f"主播账号信息: {live_room_info}")
        # 直播间id
        liveRoomId = res_room.group(1)
        # 获取m3u8直播流地址：m3u8直播比flv延迟2秒左右
        res_stream = re.search(r'hls_pull_url_map\\":(\{.*?})', res)
        res_stream_m3u8s = json.loads(res_stream.group(1).replace('\\"', '"'))
        # HD1和FULL_HD1随机获取，优先获取FULL_HD1
        res_m3u8_hd1 = res_stream_m3u8s.get("FULL_HD1", "").replace("http", "https")
        if not res_m3u8_hd1:
            res_m3u8_hd1 = res_m3u8_hd1.get("HD1", "").replace("http", "https")
        print(f"直播流m3u8链接地址是: {res_m3u8_hd1}")
        # 找到flv直播流地址:区分标清|高清|蓝光
        res_flv_search = re.search(r'flv\\":\\"(.*?)\\"', res)
        res_stream_flv = res_flv_search.group(1).replace('\\"', '"').replace("\\\\u0026", "&")
        if "https" not in res_stream_flv:
            res_stream_flv = res_stream_flv.replace("http", "https")
        print(f"直播流FLV地址是: {res_stream_flv}")
        # 开始获取直播间排行
        # live_rank.interval_rank(liveRoomId)
        return True

    def _send_ask(self, log_id, internal_ext):
        ack_pack = dy_pb2.PushFrame()
        ack_pack.logId = log_id
        ack_pack.payloadType = internal_ext

        data = ack_pack.SerializeToString()
        # self.ws_conn.send(data, opcode=websocket.ABNF.OPCODE_BINARY)

    async def _on_message(self, ws, message):
        msg_pack = dy_pb2.PushFrame()
        msg_pack.ParseFromString(message)
        decompressed_payload = gzip.decompress(msg_pack.payload)
        payload_package = dy_pb2.Response()
        payload_package.ParseFromString(decompressed_payload)
        if payload_package.needAck:
            self._send_ask(msg_pack.logId, payload_package.internalExt)
        for msg in payload_package.messagesList:
            logger.info(str(msg.method))
            match msg.method:
                case 'WebcastChatMessage':
                    await self._parse_chat_msg(msg.payload)
                case 'WebcastRoomStatsMessage':
                    # await self._parse_stats_msg(msg.payload)
                    pass

    def _add_to_dataframe(self, new_row, sheet_name):
        save_msg_number = config.content['save_msg_number']
        if sheet_name == '礼物':
            self.gift_messages = self.gift_messages._append(new_row, ignore_index=True)
            if len(self.gift_messages) >= save_msg_number:
                self._save_to_excel(self.gift_messages, '礼物')
                self.gift_messages = self.gift_messages.iloc[0:0]  # 清空DataFrame
        elif sheet_name == '弹幕':
            self.chat_messages = self.chat_messages._append(new_row, ignore_index=True)
            if len(self.chat_messages) >= save_msg_number:
                self._save_to_excel(self.chat_messages, '弹幕')
                self.chat_messages = self.chat_messages.iloc[0:0]  # 清空DataFrame
        elif sheet_name == '点赞':
            self.like_messages = self.like_messages._append(new_row, ignore_index=True)
            if len(self.like_messages) >= save_msg_number:
                self._save_to_excel(self.like_messages, '点赞')
                self.like_messages = self.like_messages.iloc[0:0]  # 清空DataFrame
        elif sheet_name == '入场':
            self.member_messages = self.member_messages._append(new_row, ignore_index=True)
            if len(self.member_messages) >= save_msg_number:
                self._save_to_excel(self.member_messages, '入场')
                self.member_messages = self.member_messages.iloc[0:0]  # 清空DataFrame

    def _save_to_excel(self, dataframe, sheet_name):
        # 指定文件夹名称
        folder_name = config.content['Barrage_File_Position']
        # 确保文件夹存在
        if not os.path.exists(folder_name):
            os.makedirs(folder_name)
        # 构造完整的文件路径
        file_path = os.path.join(folder_name, self.file_name)

        # 保存DataFrame到Excel的特定工作表
        try:
            with pd.ExcelWriter(file_path, mode='a', engine='openpyxl', if_sheet_exists='overlay') as writer:
                dataframe.to_excel(writer, sheet_name=sheet_name, index=False)
        except FileNotFoundError:
            # 如果文件不存在，则创建新文件
            with pd.ExcelWriter(file_path, mode='w', engine='openpyxl') as writer:
                dataframe.to_excel(writer, sheet_name=sheet_name, index=False)

    # 礼物关系字典
    def get_gift_value(self, gift_name):
        return self.gift_values.get(gift_name, 0)

    @staticmethod
    def load_gift_values():
        json_file = 'jsonfiles/gifts.json'
        with open(json_file, 'r', encoding='utf-8') as file:
            data = json.load(file)
        gift_values = {}
        pages = data.get("data", {}).get("pages", [])
        for page in pages:
            if page.get("page_type") == 1:  # 检查是否为礼物页面
                gifts = page.get("gifts", [])
                for gift in gifts:
                    name = gift.get("name")
                    value = gift.get("diamond_count")
                    gift_values[name] = value
        return gift_values

    @staticmethod
    async def _on_error(ws, error):
        logging.error(error)

    @staticmethod
    async def _on_close(ws, close_status_code, close_msg):
        logging.info("Websocket closed")

    @staticmethod
    async def _on_open(ws):
        logging.info("Websocket opened")

    def _extract_user_info(self, user):
        # 提取并返回用户信息字典
        user_info = {
            "id": user.id,
            "shortId": user.shortId,
            "nickName": user.nickName,
            "gender": user.gender,
            "displayId": user.displayId,
            "secUid": user.secUid,
            "avatarUrl": user.AvatarThumb.urlListList[0],
            "badgeImageUrl": "",
        }
        return user_info

    def _save_user_info_to_json(self, user_info):
        folder_name = config.content['User_File_Position']
        file_name = self.user_file
        file_path = os.path.join(folder_name, file_name)

        # 确保文件夹存在
        if not os.path.exists(folder_name):
            os.makedirs(folder_name)

        # 读取现有数据并检查重复
        if not self._is_user_exist(file_path, user_info["id"]):
            # 用户不存在，写入文件
            with open(file_path, 'a', encoding='utf-8') as file:
                json.dump(user_info, file, ensure_ascii=False)
                file.write("\n")  # 添加换行符

    def _is_user_exist(self, file_path, user_id):
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as file:
                for line in file:
                    try:
                        user = json.loads(line.strip())
                        if user.get("id") == user_id:
                            return True
                    except json.JSONDecodeError:
                        continue
        return False

    # @staticmethod
    async def _parse_chat_msg(self, payload):
        payload_pack = dy_pb2.ChatMessage()
        payload_pack.ParseFromString(payload)
        formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(payload_pack.eventTime))
        user_name = payload_pack.user.nickName
        sex = payload_pack.user.gender
        content = payload_pack.content
        # 存入用户信息json文件
        user_info = self._extract_user_info(payload_pack.user)
        self._save_user_info_to_json(user_info)

        # 如果用户的最近一次礼物价值大于等于100，则记录弹幕
        gift_threshold = config.content['gift_threshold']

        if self.user_last_gift_value.get(user_name, 0) >= gift_threshold:
            if not config.content['Sex_Select']['Is_Open']:
                new_row = {'时间': formatted_time, '用户': user_name, '性别': sex, '消息': content}
                self._add_to_dataframe(new_row, '弹幕')

            if config.content['Sex_Select']['Is_Open']:
                if sex == config.content['Sex_Select']['Sex']:
                    new_row = {'时间': formatted_time, '用户': user_name, '性别': sex, '消息': content}
                    self._add_to_dataframe(new_row, '弹幕')
        print(f"{formatted_time} [弹幕] {user_name}: {content}")
        message = DouyinMessage(formatted_time, '弹幕', user_name, content)
        await self.__on_message__(message)

    # @staticmethod
    def _parse_gift_msg(self, payload):
        payload_pack = dy_pb2.GiftMessage()
        payload_pack.ParseFromString(payload)
        formatted_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        user_name = payload_pack.user.nickName
        gift_name = payload_pack.gift.name
        gift_cnt = payload_pack.comboCount

        # 计算单次礼物的总价值
        gift_value = self.get_gift_value(gift_name) * gift_cnt
        # 更新用户的最近一次礼物价值
        self.user_last_gift_value[user_name] = gift_value
        # 添加礼物信息到 DataFrame
        new_row = {'时间': formatted_time, '用户': user_name, '礼物': gift_name, '数量': gift_cnt}
        self._add_to_dataframe(new_row, '礼物')

        print(f"{formatted_time} [礼物] {user_name}: {gift_name} * {gift_cnt}")

    # @staticmethod
    def _parse_like_msg(self, payload):
        payload_pack = dy_pb2.LikeMessage()
        payload_pack.ParseFromString(payload)
        formatted_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        user_name = payload_pack.user.nickName
        like_cnt = payload_pack.count
        # ...解析点赞消息的代码...
        new_row = {'时间': formatted_time, '用户': user_name, '点赞次数': like_cnt}
        self._add_to_dataframe(new_row, '点赞')
        print(f"{formatted_time} [点赞] {user_name}: 点赞 * {like_cnt}")

    # @staticmethod
    def _parse_member_msg(self, payload):
        payload_pack = dy_pb2.MemberMessage()
        payload_pack.ParseFromString(payload)
        formatted_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        user_name = payload_pack.user.nickName

        # ...解析会员消息的代码...
        new_row = {'时间': formatted_time, '用户': user_name}
        self._add_to_dataframe(new_row, '入场')
        print(f"{formatted_time} [入场] {user_name} 进入直播间")

    async def _parse_stats_msg(self, payload):
        payload_pack = dy_pb2.RoomStatsMessage()
        payload_pack.ParseFromString(payload)
        formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(payload_pack.eventTime))
        user_name = payload_pack.user.nickName
        sex = payload_pack.user.gender
        content = payload_pack.content
        message = DouyinMessage(formatted_time, '状态', user_name, content)
        await self.__on_message__(message)
