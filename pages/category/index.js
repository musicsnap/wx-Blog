//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false, 
    category_id: 0,
    left_srcoll_index: 0,
    categoryList: [
      {
        id:1,
        cate_name:"Linux"
      },
      {
        id: 2,
        cate_name: "PHP"
      },
      {
        id: 3,
        cate_name: "MySql"
      }
    ],
    right_scroll_content:[
      { 
        id: "1",
        cate_name: "Linux",
        data: [
          { 
            id: "1",
            title: "Linux标题1",
            productImg: "../../images/1.jpg",
            newPrice: "¥13.6",
            oldPrice: "¥22.99"
          },
          {
            id: "2",
            title: "Linux标题2",
            productImg: "../../images/1.jpg",
            newPrice: "¥13.6",
            oldPrice: "¥22.99"
          }
        ] 
      },
      {
        id: "2",
        cate_name: "PHP",
        data: [
          {
            id: "1",
            title: "PHP标题1",
            productImg: "../../images/1.jpg",
            newPrice: "¥13.6",
            oldPrice: "¥22.99"
          },
          {
            id: "2",
            title: "PHP标题2",
            productImg: "../../images/1.jpg",
            newPrice: "¥13.6",
            oldPrice: "¥22.99"
          }
        ]
      },
      {
        id: "3",
        cate_name: "MySql",
        data: [
          {
            id: "1",
            title: "MySql标题1",
            productImg: "../../images/1.jpg",
            newPrice: "¥13.6",
            oldPrice: "¥22.99"
          },
          {
            id: "2",
            title: "MySql标题2",
            productImg: "../../images/1.jpg",
            newPrice: "¥13.6",
            oldPrice: "¥22.99"
          }
        ]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },
  onLoad: function () {
    // this.requestCarouselListData();

    //初始化
    this.setData({
      category_id: 1
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  requestCategoryListData() {
    var that = this;//注意this指向性问题
    var urlStr = "";      //请求连接注意替换（我用本地服务器模拟）
    console.log("请求轮播图：" + urlStr);
    category_id
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
    var that = this;
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    wx.request({
      url: '',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {},
      success: function (res) {
        that.setData({
          classifyItems: data.result
        })
      },
      fail: function (res) {
      },
      complete: function (res) {
        wx.hideNavigationBarLoading(); //完成停止加载图标
        wx.stopPullDownRefresh();
      }
    })
  },
  changeLeft_sroll(e) {
    let id = e.currentTarget.dataset.id;
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(id)
    this.setData({
      category_id:id,
      left_srcoll_index: index
    })
  },
})