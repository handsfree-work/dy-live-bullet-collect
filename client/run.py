import asyncio

import aiohttp
import json
from typing import Union

# 设置连接的host地址
SERVER_URL = 'http://localhost:9000/id'


# 1.control: 定义控制信息，比如socket连接断开
# 2.message: 定义发送的是一般的消息体，比如弹幕、回传的信息
# 3.api: 定义api接口，比如心跳、登录、和拿到一些数据
# 4.other: 定义其他的一些自定义的请求
class SendMessage:
    def __init__(self, typeName: Union["control", "msg", "api", "other"], data: Union[str, dict]):
        self.type = typeName

        # if self.type == "control" and data != "close":
        #     raise ValueError("Invalid data value for control message type.")

        # elif self.type == "msg" and not isinstance(data, (str, dict)):
        #     raise TypeError("Data value for msg message type should be str or dict.")

        self.data = data


class MessageSender:
    def __init__(self):
        self.session = None
        self.ws = None

    async def connect_to_server(self, live_id: str, client_id: int):
        self.session = aiohttp.ClientSession()
        self.ws = await self.session.ws_connect(
            SERVER_URL + '?id=' + live_id + '&client_id=' + str(client_id))
        print("已连接到服务器")

    async def send_message(self, tpyeName, message):
        await self.ws.send_json(SendMessage(tpyeName, message).__dict__)

    async def receive_message(self):
        msg = await self.ws.receive()
        print(msg)
        if msg.type == aiohttp.WSMsgType.TEXT:
            # print("接收到服务器响应：", json.loads(msg.data))
            data = json.loads(msg.data)
            print(data)
            # await self.send_message('control', 'test')
            return True

        elif msg.type == aiohttp.WSMsgType.CLOSED:
            print("连接已关闭")
            await self.close_connection()
            return False
        elif msg.type == aiohttp.WSMsgType.ERROR:
            print("连接发生错误")
            await self.close_connection()
            return False

    async def close_connection(self):
        await self.ws.close()
        await self.session.close()
        print("连接已关闭")

    async def send_and_receive(self):
        # message = input("请输入要发送给服务器的消息：")
        # await self.send_message('msg', message)

        received = await self.receive_message()
        if received:
            await self.send_and_receive()


async def main(client_id: int):
    sender = MessageSender()
    closed_live = "785217135756"
    opened_live = "740849246012"
    await sender.connect_to_server(opened_live, client_id)
    await sender.send_and_receive()


asyncio.run(main(1))
