# 标签页组件

Vue轮子，标签页切换组件。

![](https://ws1.sinaimg.cn/large/82d73c4bgy1fo4skl5w0uj20cu03vjrf.jpg)

## 小结
1. 组件层级结构是，`app -> tabs -> pane`，三级的嵌套（与事先设想的二级嵌套`app -> tabs`有点差别）。
2. 标签页的内容作为**slot**插入到`pane`组件中，三个`pane`组件也是作为**slot**插入到`tabs`组件中。方便直接在父级组件里对内容进行更新。
3. 标签页的切换是依赖于`pane`组件的两个**props**：label（标签页的标题）和name。首先，在`pane`组件挂载时，获取label为tab标签内容填充，name则作为标识来匹配**currenNav**（表示当前选中的标签页的变量）。在切换时，在点击事件里修改**currenNav**的值并更新`pane`组件的显示，并监听**currenNav**的变化更新tab的选中情况。
4. 值得注意的点是，如何利用Vue组件间通信，在标签页在切换时候，让tab去控制pane的显示。