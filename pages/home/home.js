// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ['一幅','不错的','山水佳作']
  },
  handleItemClick (event) {
    const {index,titles} = event.detail
    console.log(index,titles);
  },
  handleIncrementCpn () {
    const my_sel = this.selectComponent("#sel_id")
    // 直接设置组件内的属性不是太适合
    // my_sel.setData({
    //   counter : ++ my_sel.data.counter
    // })
    my_sel.incrementCounter(50)
  }
})