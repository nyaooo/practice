# HTML5.2 \<dialog\>标签

新版本的HTML终于有了原生的模态框，写个小demo试试手。

## 基本示例

```
<dialog open>
    文本示例1 你能看见我
</dialog>
```

![](https://ws1.sinaimg.cn/large/82d73c4bly1fo0wwbus26j206302xweb.jpg)

`open`属性存在，则表示模态框显示。（默认的样式，emmmm.....很原生的feel）

## 进阶设置

根据需要，可以在`dialog`元素里面加上规范的结构。如：

```
<dialog>
    <header>
        <h3>标题</h3>
    </header>
    <main>
        <p>文本内容</p>
    </main>
    <footer>
        <button>按钮</button>
    <footer>
</dialog>
```

规范好结构，就可以给模态框各个部分加上样式了。这个时候，简单使用`open`属性并不能完成我们对于模态框的使用功能需求了，所以，官方提供以下的方法来控制。

```
const modal = document.querySelector('dialog');

// open dialog
modal.showModal();

// close dialog
modal.close();
```

使用`showModal()`方法，在打开模态框的时候，会加上一层阴影，用来组织用户和除`dialog`元素以外的元素进行交互。并且可以自己修改阴影的样式，

```
dialog::backdrop {
    backgrond-color: rgba(0, 0, 0, .5);
}
```

还有，当我们需要从`dialog`中返回一些信息时，可以用到`returnValue`属性。给`close()`传递一个参数，之后，通过`returnValue`属性取出。

```
var msg = 'hello';

modal.close(msg);

console.log(modal.returnValue);     // hello
```

## 兼容性

由于比较新，目前似乎只有webkit内核的浏览器能支持\<dialog\>元素。若需要使用，就必须做一些兼容上的调整。下面这篇文章讲了这一部分，值得一看，我写的这个小demo也借鉴了这位作者的一些地方。

文章地址：[一起来看 HTML 5.2 中新的原生元素 <dialog>](https://segmentfault.com/a/1190000012894864)。

