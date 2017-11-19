
var app = getApp();
//测试列表
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo : {
        avatarUrl: '../../../res/drawable/user_black.png'
      },
      hasUserInfo:false,
      testArray: [{
          title: '事件',
          message: '../mytest/eventTest/eventTest'
        }, {
          title: '快递查询',
          message: '../mytest/expressQueryTest/expressQuery'
        }, {
          title: '布局基础',
          message: '../mytest/layoutTest/layoutTest'
        }
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if(app.globalData.userInfo == null){
    //   // wx.navigateTo({
    //   //   url: '/pages/otherPages/login/login',
    //   // })
    //   wx.navigateTo({
    //     url: '../../otherPages/login/login',
    //   })
    // } else {
    //   this.setData({ username: app.globalData.userinfo.username })
    // }

    // wx.navigateTo({
    //   url: '../../otherPages/login/login',
    // })
  },

  getUserInfo : function(e){
      console.log("获取用户数据----->");
      console.log(e);
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})