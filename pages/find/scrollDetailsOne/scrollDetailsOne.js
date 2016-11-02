Page({
    data: {
        hidden: true,
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
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '视频demo'
        })
    }
})