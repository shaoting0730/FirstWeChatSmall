//dynamic.js
//获取应用实例
var app = getApp()
Page({
  data: {
    images: [
            "http://static.home.mi.com/app/shop/img?id=shop_904608692a4d8415d0de39a0a5897e80.jpeg&w=1080&h=600&crop=a_0_120_1080_480&t=webp&z=1.15&q=78",
        
            "http://static.home.mi.com/app/shop/img?id=shop_0f5e43035a8b8d27a4b6f315d222fd9b.jpeg&w=1080&h=600&crop=a_0_120_1080_480&t=webp&z=1.15&q=78",
          
            "http://static.home.mi.com/app/shop/img?id=shop_4ba3d814639ab27570f174467133619f.png&w=1080&h=600&crop=a_0_120_1080_480&t=webp&z=1.15&q=78",
          
            "http://static.home.mi.com/app/shop/img?id=shop_91f29509f14ea243958285aaf5d5b640.jpeg&w=1080&h=600&crop=a_0_120_1080_480&t=webp&z=1.15&q=78",
          
            "http://static.home.mi.com/app/shop/img?id=shop_5c752db8097555831469356f5f389078.jpeg&w=1080&h=600&crop=a_0_120_1080_480&t=webp&z=1.15&q=78",
         
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
     winWidth: 0,
        winHeight: 0,

        // tab切换
        currentTab: 0,

        // 幻灯片数据
        topStories : [],
        // 精选数据
        datalist: [],
        // 日报数据
        dataThemes : [],

        dataListDateCurrent: 0,      // 当前日期current
        dataListDateCount: 0,      // 请求次数

        // 显示加载更多 loading
        hothidden: true,

        // loading
        hidden: true,
        list : [],
        playIndex : -1,
        isload : true,
        page : 1,
        play : {},
        action : {},
        data:{},
        playSong : function(){

        },
        onLoad: function () {
        },
        hidden  : true

   // 程序中使用到底属性初始化值\
   ,sliderVisibility:'hidden'
   ,curPosition    : '00:00'
   ,musicTypeTitle : '频道选择'
   ,singername  : '未知'
   ,songname    : '未知'
   ,singerpic   : '../../res/img/logo_music.png'
   ,songHash    : ''
   ,singerPicRotate : 0
   ,selectIndex : 0
   ,musicTypes : [
      {type:'calm'     ,src:"../../res/img/calm"     ,title:'平静'}
     ,{type:'happy'    ,src:"../../res/img/happy"    ,title:'愉快'}
     ,{type:'puzzled'  ,src:"../../res/img/puzzled"  ,title:'困惑'}
     ,{type:'surprised',src:"../../res/img/surprised",title:'惊讶'}
     ,{type:'angry'    ,src:"../../res/img/angry"    ,title:'愤怒'}
     ,{type:'scared'   ,src:"../../res/img/scared"   ,title:'恐惧'}
     ,{type:'sad'      ,src:"../../res/img/sad"      ,title:'悲伤'}
     ,{type:'smiling'  ,src:"../../res/img/smiling"  ,title:'爱心'}
    ]
    ,playList : []
    ,curMusicInfo : {}

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
      bindChange: function( e ) {

        var that = this;
        that.setData( { currentTab: e.detail.current });

    },

     /**
     * 点击tab切换
     */
    swichNav: function( e ) {

        var that = this;

        if( this.data.currentTab === e.target.dataset.current ) {
            return false;
        } else {
            that.setData( {
                currentTab: e.target.dataset.current
            })
        }


    },


  onLoad: function () {
    console.log('onLoad')
    var that = this

      // url: 'http://news-at.zhihu.com/api/4/themes',
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes', 
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        var arr = res.data.others;
        console.log(res.data)
        that.setData( {
                dataThemes: arr,
            });
      }
    })

    wx.request({
          url: 'http://m.kugou.com/rank/info/',
          data: {
            rankid : 8888,
            page : that.data.page,
            json : true
          },
          header: {
              'Content-Type': 'application/json'
          },
          //接口请求成功后回调
          success: function(res) {
            //使用this.setData方法，修改data的数据，修改完后，页面会自动刷新使用新的数据
            //设置歌曲列表，设置加载动画为false，这样就加载动画就会消失
            that.setData({
              list : res.data.songs.list,
              isload : false
            });
          }
        });

    
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
