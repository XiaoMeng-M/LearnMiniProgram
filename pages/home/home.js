// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '我是分享的标题',
      path: '/pages/home/home.wxml'
    }
  },
  handleClickEvent (){
    wx.showToast({
      title: '显示消息提示框',
    })
  },
  handleClickModal () {
    wx.showModal({
      title: '显示模态对话框',
      content : '这是内容区域',
      // showCancel: false,
      success: function (res) {
        if (res.cancel) {
          console.log("用户点击了取消按钮");
        }else if(res.confirm) {
          console.log("用户点击了确定按钮");
        }
      }
    })
  },
  handleClickLoading () {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    setTimeout(() => {
      wx.hideLoading({
        complete: (res) => {
          console.log(res);
        },
      })
    }, 2000);
  },
  handleClickActionSheet (){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        const index = res.tapIndex
        switch (index) {
          case 0 : console.log('点击A选项') 
            break;
          case 1 : console.log('点击B选项')
            break;
          case 2 : console.log('点击C选项')
            break;


        }
      }
    })
  }
})