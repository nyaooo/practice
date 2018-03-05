# 排序表格

Vue轮子，render函数练习，可排序的表格。

![](https://ws1.sinaimg.cn/large/82d73c4bgy1fp1z1ni2lhj20is08o3zc.jpg)

对指定列进行排序。

## 小结
1. 表格数据从父组件通过`prop: data, columns`传入，为了保持数据的单向通信，不直接使用，将其赋值给子组件的`data: currentData, currentColumns`。但碰巧了这里的数据包含了数组和对象类型，简单的复制并起不到作用，需要用深复制。这样一来，在表格内容庞大的情况下，势必会增大开销。
2. 用render函数渲染表格，循环遍历时要注意行、列和单元格的嵌套关系。
3. 有添加记录的功能，就需要在表格组件里使用`watch`监控数据，发生变化，先更新数据，再重新排序。
4. 排序过程会改变数组原始的**index**，在初始化数据时，将数据的原始index保存下来，方便操作。
5. render函数依据**currentData**和**currentColumns**渲染出表格，在排序函数里会对它们作出修改。之后，render函数会重新渲染，并进入Vue实例的beforeUpdate和updated生命周期。
6. 访问对象属性方法，
    ```
        people.name; // AAA
        people['name']; // AAA
    ```