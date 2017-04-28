/* user index*/
var app = getApp()
const listData = [
    {icontype: 'icon-wallet', title: '我的钱包', url: '../wallet/wallet'},
    {icontype: 'icon-files', title: '我的行程', url: '../travel/travel'},
    {icontype: 'icon-ic_like', title: '骑行偏好', url: '../ridePreference/ridePreference'},
    {icontype: 'icon-help', title: '帮助中心', url: '../help/help'},
    {icontype: 'icon-book', title: '我要反馈', url: '../feedback/feedback'},
    {icontype: 'icon-settings', title: '设置', url: '../setting/setting'},
]

Page({
  data: {
    userInfo: {},
    listData: listData
  },
  bindViewTap(evt) {
    wx.navigateTo({
      url: evt.currentTarget.dataset.url
    })
  },
  onLoad() {
    this.setData({
        userInfo: app.globalData.userInfo
    })
    
  }
})
