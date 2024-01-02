const WebSocket = require('ws')

const signature = '64gvFkLfkCRN6cdT' // 验证你的 signature
const userAgent = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36'
// const webSocketUrl = `wss://webcast5-ws-web-hl.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.0.6&update_version_code=1.0.6&compress=gzip&device_platform=web&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&cursor=t-1689264612798_r-1_d-1_u-1_h-1&internal_ext=internal_src:dim|wss_push_room_id:7255257051152730915|wss_push_did:7255323052254414347|dim_log_id:202307140010123EF135C24A944B5EF10A|fetch_time:1689264612798|seq:1|wss_info:0-1689264612798-0-0|wrds_kvs:WebcastRoomStatsMessage-1689264611462151237_WebcastRoomRankMessage-1689264389498438065&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&endpoint=live_pc&support_wrds=1&user_unique_id=&im_path=/webcast/im/fetch/&room_id=7255257051152730915&identity=audience&heartbeatDuration=0&signature=${signature}`
const webSocketUrl = `wss://webcast5-ws-web-lf.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.0.12&update_version_code=1.0.12&compress=gzip&device_platform=web&cookie_enabled=true&screen_width=2048&screen_height=1280&browser_language=zh-CN&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/119.0.6045.160%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&cursor=t-1704077709926_r-1_d-1_u-1_h-7318957886570763299&internal_ext=internal_src:dim|wss_push_room_id:7318918716492679936|wss_push_did:7317184710429476361|dim_log_id:2024010110550988B99C35E2D6FED671D9|first_req_ms:1704077709813|fetch_time:1704077709926|seq:1|wss_info:0-1704077709926-0-0|wrds_kvs:WebcastRoomRankMessage-1704077406406475392_InteractEffectSyncData-1704068660949134591_WebcastActivityEmojiGroupsMessage-1704068663899604396_WebcastInRoomBannerMessage-GrowthCommonBannerASubSyncKey-1704076103438003454_WebcastRoomStatsMessage-1704077706381504969&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&endpoint=live_pc&support_wrds=1&user_unique_id=7317184710429476361&im_path=/webcast/im/fetch/&identity=audience&need_persist_msg_count=15&room_id=7318918716492679936&heartbeatDuration=0&signature=${signature}`
const client = new WebSocket(webSocketUrl, {
    headers: {
        'User-Agent': `Mozilla/${userAgent}`,
        cookie: 'ttwid=1%7C8PxhgTXOdD35a3q9ukmZUhPpJyZjiJ_7GA-JtLwc-Bs%7C1703664839%7C5f387a18357119e610ad8cb13f239b2a974d5d9d3b464eb077b8da8e99cfdce3;'
    }, binary: true
})

client.on('open', () => {
    console.log('###########     WebSocket open    ###########')
})

client.on('message', message => {
    console.log(message)
})

client.on('close', async () => {
    console.log('###########     WebSocket close     ###########')
})

client.on('error', err => {
    console.log('###########     WebSocket close     ###########')
})