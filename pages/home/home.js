// pages/home/home.js
import request from "../../service/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ['一幅','不错的','山水佳作']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/h8/home/multidata',
    //   success:function(res){
    //     console.log(res);
    //   },
    //   fail: function(err) {
    //     console.log(err);
    //   }
    // })
    request({
      url:'http://152.136.185.210:8000/api/h8/home/multidata',
    }).then(res => {
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
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

  }
})