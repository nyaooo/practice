# 数字输入组件

使用vue的组件来实现一个只能输入数字的输入框。

![](https://ws1.sinaimg.cn/large/82d73c4bgy1fo3aj2ew5fj20b703fmx5.jpg)

## 小结

参照书上的例子写的小demo，一开始看起来觉得很简单，实际写完还是有一些收获：

1. 输入框的初始值由父组件传递，但vue中父子组件是单项数据通信，所以单独在子组件data中创建一个currentValue来使用。
2. 在按钮上，利用disabled属性和最大最小值配合来限制对数值的加减范围。
3. 对于组件设计的规范，比之前清晰了。（API只来自props，events，slot）。