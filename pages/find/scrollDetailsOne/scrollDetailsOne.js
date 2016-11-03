function getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}
Page({
    inputValue: '',
    data: {
        hidden: true,
        danmuList: [
            {
                text: '我是默认弹幕1',
                color: '#ff0000',
                time: 1
            },
            {
                text: '我是默认弹幕2',
                color: '#ff00ff',
                time: 3
            }
        ]
    },
    //事件处理函数
    onLoad: function (options) {
        var that = this
        wx.request({
            url: 'http://c.m.163.com/nc/video/home/0-10.html',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function (res) {
                console.log(res.data)
                that.data.showLoading = false
                that.data.items = res.data.videoList
            }
        })
    },
    onReady: function (res) {
        this.videoContext = wx.createVideoContext('myVideo')
        wx.setNavigationBarTitle({
            title: '视频demo'
        })
    },
    bindInputBlur: function (e) {
        this.inputValue = e.detail.value
        // console.log(this.inputValue)
    },
    bindSendDanmu: function () {
        console.log(this.inputValue)
        var that = this
        
        that.videoContext.sendDanmu({
            text: this.inputValue,
            color: getRandomColor(),
            time:2
        })
    },
    videoErrorCallback: function (e) {
        console.log('视频错误信息:')
        console.log(e.detail.errMsg)
    }
})