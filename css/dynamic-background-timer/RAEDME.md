# 根据时间动态变化背景颜色

![](https://ws1.sinaimg.cn/large/82d73c4bgy1fp223et34ej20li05u0st.jpg)

![](https://ws1.sinaimg.cn/large/82d73c4bgy1fp223et68qj20jg05pwek.jpg)

将当前时分秒6位数当作HEX格式的颜色数值来动态地设置背景颜色。

## 小结
问题（未解决）：时间是变化的，每一秒钟要更新一次，这就意味着每秒钟要创建一个新的时间对象来获取时间。虽然在设置CSS之后将对象`delete`了，但打开网页的时候，还是有大概1s的空白等待时间。
