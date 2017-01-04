var app  =  getApp()
var utils = require('../../utils/util.js');

Page({
  data:{
    list:[],
    duration:2000,
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    loading:false,
    plain:false,
  },
  onLoad:function() {
    var that= this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      header:{
          'Content-type':'application/json'
      },
      method: 'GET',        // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        that.setData({                                              // 请求到数据，开始设置 data属性值
          banner:res.data.top_stories,                              // 对应后端api 返回的top_stories 节点数据
          list:[{ header:'今日热文'}].concat(res.data.stories)       // 对应后端api 返回的stories 节点数据
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    this.index = 1;
  },

  // 下拉滚动条，点击更多的响应
  loadMore:function(e){
      if( this.data.list.length === 0 ) 
        return
      var date = this.getNextDate();
      var that = this;
      this.setData({loadloading: true });   
      wx.request({
        url: 'https://news-at.zhihu.com/api/4/news/before/'+  utils.formatDate(date),
        method: 'GET', 
        header: {
          'Content-type':'application/json'     // 约定客户端请求服务器的数据
        },
        dataType:'json',                        // 默认为json，希望服务器响应的数据格式
        success: function(res){
          console.dir(res);     // 响应结果res为： {data:后端服务器返回的内容 }
          that.setData({
            loading: false,
            list:that.data.list.concat([ {header:utils.formatDate(date,'-') }]).concat(res.data.stories)
          });
        },
      })
  },

  getNextDate:function() {
    var  now = new Date();  
    now.setDate( now.getDate() - this.index++ );
    return  now;
  },

  //  banner图片的热区绑定 
  bindViewTap:function(e) {
    console.dir(e);
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id,
    })
  }
})



// BaseEvent 基础事件对象属性列表

// {
//   type:
//   timeStamp:
//   target:  {
//     id:
//     tagName:
//     dataset:
//   }
//   currentTarget:{
//     id:
//     tagName:
//     dataset:
//   }
// }