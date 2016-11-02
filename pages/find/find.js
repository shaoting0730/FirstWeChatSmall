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
    showLoading: true,
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
        console.log('发现上部的ScrollView');
        console.log(res.data)
        that.data.images = res.data
        that.data.showLoading = false
      }
    })

    //listView请求  
    wx.request({
      url: 'http://json.bmbstack.com/playingList',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log('发现下部的ListView');
        console.log(res.data);
        that.data.items = res.data
        that.data.showLoading = false
      }
    })

  },
  //轮播图片点击事件
  clickPicture: function (event) {
    console.log(event)
    console.log('offsetLeft:' + event.currentTarget.offsetLeft) //offsetLeft
    console.log('屏幕宽度:' + screenWidth) //屏幕宽度
    var i = event.currentTarget.offsetLeft/screenWidth //第几个屏幕
    if (i/2 == 0 || i/2 == 1) {
      wx.navigateTo({
        url: './scrollDetails/scrollDetails'
      })
    } else {
      wx.navigateTo({
        url: './scrollDetailsOne/scrollDetailsOne'
      })
    }


  },
  //点击listView中的cell
  cellAction: function () {
    wx.navigateTo({
      url: './buyTicket/buyTicket'
    })
  },
  //点击购买按钮
  buyAction: function () {

  }

})
