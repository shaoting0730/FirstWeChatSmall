Page({
    data: {
        hasMore: true,
        showLoading: true,
            toView: 'red',
    scrollTop: 100
    },
    //事件处理函数
    onLoad: function (options) {
        var that = this
        wx.request({
            url: 'http://json.bmbstack.com/cinemaList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function (res) {
                console.log(res.data)
                that.data.showLoading = false
                that.data.items = res.data
            }
        })
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '电影院'
        })
    },
    chooseSeat: function () {

    },
    refresh: function (e) {
        console.log(e)
        console.log('下拉刷新')
    },
    loadloadMore: function (e) {
        console.log(e)
        console.log('上拉加载更多')
        this.data.hasMore = false
    },
    scroll: function (e) {
        console.log(e)
        console.log('滚动了')
    }
})