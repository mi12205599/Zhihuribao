// pages/theme/theme.js
Page({
  data:{
    list:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var  that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/themes',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      headers: {
        'Content-type':'application/json'
      },                
      success: function(res){
         that.setData({
            list:res.data.others
         });
      }

    })

  },
  onReady:function(){
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title: '主题日报',
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})