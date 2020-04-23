//app.js
App({
    globalData: {

    },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    const token = wx.getStorageSync('token')
    if (token && token.length !== 0) {
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        method: "post",
        header: {
          token
        },
        success: res=>{
          if (!res.data.errCode) {
           console.log("token有效");
            this.globalData.token = token
          }else {
            this.login()
          }
        }
      })
    }else {
      this.login()
    }

  },
  login(){
    wx.login({
      success: (res) => {
        const code = res.code
        // 把code发送到服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method : 'post',
          data: {
            code
          },
          success: (res)=> {
            const token = res.data.token
            this.globalData.token = token
            wx.setStorageSync('token', token)
            console.log(this.globalData.token);
          }
        })
      },
    })
  }
})
