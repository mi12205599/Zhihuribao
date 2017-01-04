//app.js
App({
  onLaunch: function () {       // 声明周期函数只会启动一次
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
   // logs.length = 0;
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs)
    
  },

  //  开发者可以添加任意的函数或者数据到object参数中，用this可以访问
  getUserInfo:function(cb){
    // 使用this拿到App实例
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  globalData:{
    userInfo:null
  }
})