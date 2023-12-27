import requests

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36',
    'cookie': 'msToken=feWMlseXLj6d3ha2Z8OQtFfw91vOTJoZCEtX2iqI8eB3Ri_2hLbToEbZj3CMwmieqBkwe9zGxVBB_m7I3017Qn6pyfBx45HTo7thNws-AbXdMJivoWM=; passport_fe_beating_status=false; IsDouyinActive=false; __ac_nonce=0658bdcc70075c7f880b6; __ac_signature=_02B4Z6wo00f01WL61bgAAIDDKmGM9fED9TFi2tEAAD056c;',
}

res = requests.request("get", "https://live.douyin.com/590636107129", headers=headers)
print(res.text)
