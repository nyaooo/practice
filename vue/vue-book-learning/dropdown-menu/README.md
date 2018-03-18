# 自定义指令：下拉菜单

Vue轮子，下拉菜单，点击外部区域关闭。

![](https://ws1.sinaimg.cn/large/82d73c4bgy1fozmjlfgg8j208z06vwel.jpg)

## 小结
1. contains方法，A.contains(B)，检测A是否包含B。包含返回true，否则false。
2. 在自定义指令的bind函数里写的监听（或者别的balabala），unbind记得解绑，删除。