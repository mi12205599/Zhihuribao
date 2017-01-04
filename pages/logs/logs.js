//logs.js
var util = require('../../utils/util.js')
Page({
  // data作为初始化数据，将会以json的形式由逻辑层传至渲染层，数据必须是可转为JSON的格式
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
         return util.formatTime(new Date(log)) 
      })
    })
  },
  onReady:function() {
    wx.setNavigationBarTitle({
      title: '重写配置项的文字',
      success: function(res) {
        // success
      }
    })
  }
})
