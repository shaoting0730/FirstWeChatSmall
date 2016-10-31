//find.js
//获取应用实例
var app = getApp()
//获取屏幕宽度
var screenWidth = wx.getSystemInfo({
  success: function (res) {
    screenWidth = res.windowWidth
  }
})

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },
  
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
         title: '发现'
    })
    var that = this
    //轮播请求
    wx.request({
      url: 'http://json.bmbstack.com/bannerList', 
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.data.images = res.data 
      }
    })

    //listView请求  
    wx.request({
      url: 'http://json.bmbstack.com/playingList',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.data.items = res.data
      }
    })

  },

  //轮播图片点击事件
  clickPicture: function (event) {
    console.log('点击位置的X:' + event.detail.x) //点击位置的X
    console.log('屏幕宽度:' + screenWidth) //屏幕宽度
    wx.navigateTo({
      url: './dynamicDetails/dynamicDetails'
    })
  }

 

})
