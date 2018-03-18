# 自定义指令：时间格式化

Vue轮子，时间格式化指令v-time。

![](https://ws1.sinaimg.cn/large/82d73c4bgy1foy9ynjduaj204x040q2z.jpg)

将Unix时间戳，格式化成可读性更友好的文字。

Vue轮子，生日格式化指令v-birthday

![](https://ws1.sinaimg.cn/large/82d73c4bgy1foyb6sjadzj206x01iq2z.jpg)

将Unix时间戳，格式化为具体年龄。

## 小结
1. 要自定义指令的的几个钩子函数，以及包含的参数（Eg：el，binding）
2. 格式化时间的函数里，时间戳默认是以毫秒为单位，先转换成秒更方便判断和操作。**要注意时间戳前后对应的数值的大小关系**。
3. 书上列子写了定时器（每分钟更新一次时间），一开始没考虑到。当用户一直停留在页面上时，有了动态更新，就能提供更准确时间标识。