Component({
  data: {
    selected: 0,
    color: "#707070",
    selectedColor: "#d81e06",
    list: [{
      "selectedIconPath": "/images/home_active.png",
      "iconPath": "/images/home.png",
      "pagePath": "/pages/index/index",
      "text": "首页"
    },
      {
        "selectedIconPath": "/images/cate_active.png",
        "iconPath": "/images/cate.png",
        "pagePath": "/pages/category/index",
        "text": "分类"
      },
      {
        "selectedIconPath": "/images/user_active.png",
        "iconPath": "/images/user.png",
        "pagePath": "/pages/user/index",
        "text": "我的"
      }]
  },
  attached() {
    // getApp().watch(this.watchBack, this)
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.path
      var pages = getCurrentPages()
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})