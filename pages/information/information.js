//information.js
//获取应用实例
var app = getApp()



var arr_name = ["美容", "减肥", "保健养生", "人群", "时节", "餐时", "器官", "调养",
                "肠胃消化", "孕产哺乳", "经期", "女性疾病", "男性", "呼吸道", "血管",
                "心脏", "肝胆脾胰", "神经系统", "口腔", "肌肉骨骼", "其他"]
var arr_link = [1, 10, 15, 52, 62, 68, 75, 82, 98, 112, 147, 161, 218, 166, 182,
                188, 192, 197, 202, 205, 212, 227, 132]
var file = "../../pages/information/list"



Page({
  data: {
    imgUrls: [
      'http://uploads.xuexila.com/allimg/1607/676-160G4151320-51.jpg',
      'http://uploads.xuexila.com/allimg/1607/676-160G4151319.jpg',
      'http://uploads.xuexila.com/allimg/1607/676-160G4151320-50.jpg',
      'http://uploads.xuexila.com/allimg/1607/676-160G4151316.jpg',
      'http://uploads.xuexila.com/allimg/1607/676-160G4151311-50.jpg'
    ],

items: [{
            id: "1",
            src: "../../image/information/meirong.png",
            text: arr_name[0]
        }, {
            id: "10",
            src: "../../image/information/jianfei.png",
            text: arr_name[1]
        }, {
            id: "15",
            src: "../../image/information/jiankangyangsheng.png",
            text: arr_name[2]
        }, {
            id: "52",
            src: "../../image/information/renqun.png",
            text: arr_name[3]
        }, {
            id: "62",
            src: "../../image/information/shijie.png",
            text: arr_name[4]
        }, {
            id: "68",
            src: "../../image/information/canshi.png",
            text: arr_name[5]
        }, {
            id: "75",
            src: "../../image/information/qiguan.png",
            text: arr_name[6]
        }, {
            id: "82",
            src: "../../image/information/tiaoyang.png",
            text: arr_name[7]
        }, {
            id: "98",
            src: "../../image/information/chagnweixiaohua.png",
            text: arr_name[8]
        }, {
            id: "112",
            src: "../../image/information/yunchanpuru.png",
            text: arr_name[9]
        }, {
            id: "147",
            src: "../../image/information/jingqi.png",
            text: arr_name[10]
        }, {
            id: "161",
            src: "../../image/information/nvxingjibing.png",
            text: arr_name[11]
        }, {
            id: "218",
            src: "../../image/information/nanxing.png",
            text: arr_name[12]
        }, {
            id: "166",
            src: "../../image/information/huxidao.png",
            text: arr_name[13]
        }, {
            id: "182",
            src: "../../image/information/xueguan.png",
            text: arr_name[14]
        }, {
            id: "188",
            src: "../../image/information/xinzang.png",
            text: arr_name[15]
        }, {
            id: "192",
            src: "../../image/information/gandanpiy.png",
            text: arr_name[16]
        }, {
            id: "197",
            src: "../../image/information/shenjingxitong.png",
            text: arr_name[17]
        }, {
            id: "202",
            src: "../../image/information/kouqiang.png",
            text: arr_name[18]
        }, {
            id: "205",
            src: "../../image/information/jirouguge.png",
            text: arr_name[19]
        }, {
            id: "212",
            src: "../../image/information/qita.png",
            text: arr_name[20]
        }],
        url:file,

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },
})

