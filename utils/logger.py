import logging

logger = logging.getLogger('logger')
logger.setLevel(logging.DEBUG)

# 创建一个输出到控制台的处理器
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)

# 创建一个格式化器，并将其应用到处理器
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)

# 将处理器添加到日志器
logger.addHandler(console_handler)
