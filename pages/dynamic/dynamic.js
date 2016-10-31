//dynamic.js
//获取应用实例
var app = getApp()
Page({
  data: {
    images: [
      'http://pic2.sc.chinaz.com/files/pic/webjs1/201609/jiaoben4524.jpg',
      'http://pic2.sc.chinaz.com/files/pic/webjs1/201504/jiaoben3322.jpg',
      'http://pic.sc.chinaz.com/files/pic/webjs1/201312/jiaoben1786.jpg',
      'http://pic.sc.chinaz.com/files/pic/webjs1/201310/jiaoben1532.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },
navs: [
      {
        image: 'https://m.youcai.xin/static/img/gravida.png',
        text: '孕妇'
      }, {
        image: 'https://m.youcai.xin/static/img/confinement.png',
        text: '月子'
      }, {
        image: 'https://m.youcai.xin/static/img/baby.png',
        text: '幼儿'
      }, {
        image: 'https://m.youcai.xin/static/img/old.png',
        text: '老人'
      }
    ],

  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }

  
})
