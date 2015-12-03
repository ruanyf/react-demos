# 关于facebook官方关于react文档的部分摘要

# React生命周期

componentDidUpdate，componentDidMount（只触发一次）时机适用于操作dom

componentWillUnmount 时机适用于清除垃圾变量，定时器等

componentWillUpdate 时机在render之前，做一些准备。 不能在这里面使用this.setState()

shouldComponentUpdate 是react为了提升性能，可以在这里面return false，之后的生命周期就会都跳过，DOM不会重新渲染

componentWillReceiveProps 在这里面call this.setState不会触发重新渲染，但是可以在这边执行它，增加一些类似indicator的东西

componentDidMount 子组件在父组件之前调用

componentWillMount（只触发一次） 如果在这里调用setState(),render会看到这个改变的state

---

getInitialState()  【仅仅执行一次】 返回的值将作为this.state的初始值

getDefaultProps()   【仅仅执行一次】 

# render 方法
- <noscript>标签适用于react的Dom Diff算法，和return null具有相同的效果
- render会根据this.props 和 this.state，来渲染对应的Dom

# 事件绑定
react 只有在最外层使用唯一一个事件监听器处理所有事件，通过冒泡的形式映射对应node的事件回调函数

# 从属关系
组件不能修改自身的 props - 它们总是与它们拥有者设置的保持一致。这是保持用户界面一致性的关键性原则

