//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Yume Blog',
    userInfo: {},
    carouselList: [
      { img:'../../images/2.jpg'},
      { img: '../../images/3.jpg' },
      { img: '../../images/4.jpg' },
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // this.requestCarouselListData();
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  requestCarouselListData() {
    var that = this;//注意this指向性问题
    var urlStr = "";      //请求连接注意替换（我用本地服务器模拟）
    console.log("请求轮播图：" + urlStr);
    wx.request({
      url: urlStr,
      data: {//这里放请求参数，如果传入参数值不是String，会被转换成String 
        // x: '',
        // y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var resultArr = res.data.result;
        that.setData({
          carouselList: resultArr
        })
      }
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    wx.request({
      url: '',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {},
      success: function (res) {
      },
      fail: function (res) {
      },
      complete: function (res) {
        wx.hideNavigationBarLoading(); //完成停止加载图标
        wx.stopPullDownRefresh();
      }
    })
  },
})