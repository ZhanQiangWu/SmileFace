
var Bmob = require('../../../utils/bmob.js');

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:null,
      password:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '用户登录'
    })
  },

  formSubmit:function(event){
      wx.showLoading({
        title: '正在注册...',
      });

      var accoutPswd = event.detail.value.accountPswd;
      var accoutName = event.detail.value.accountName;

      if(accoutName !="" && accoutPswd != ""){
          var user = new Bmob.User();
          user.set("username", accoutName);
          user.set("password", accoutPswd);
          user.signUp(null, {
            success: function (res) {
                wx.hideLoading();
                console.log(res);
            },
            error: function (userData, error) {
                console.log(userData);
                console.log(error);
            },
            complete: function (userData) {
              
            }
          });
      }
      console.log(event);
  },

  // loginBtnClick: function(){
  //     wx.showLoading({
  //       title: '正在注册...',
  //     });
  //     app.globalData.userInfo = {
  //       username: this.data.username,
  //       password: this.data.password
  //     }
  //     console.log(app.globalData);
      
  //     // wx.navigateBack({
        
  //     // })
    
  // },

  usernameInput: function(event){
      this.setData({
        username: event.detail.value
      })
  },

  passwordInput: function(event){
      this.setData({
        password : event.detail.value
      })
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