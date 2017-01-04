// pages/detail/detail.js
Page({
  data:{},          //  页面初始化数据

  onLoad:function(options){
    // 页面初始化，options为页面跳转所带来的参数
    var  that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/'+ options.id,
      data: {},
      method: 'GET', 
      success: function(res){
        that.setData({art:res.data}); 
      }
    })

  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title: '详细页面'
    });
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