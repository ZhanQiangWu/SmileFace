
// 获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressNum:null,
    expressInfo:null
  },

  input: function(e){
    this.setData({
      expressNum:e.detail.value
    });
  },

  // 快递查询
  queryClick: function (e){
    //456451120742
    var thispage = this;
    app.queryExpressInfo('zto',this.data.expressNum,function(data){
      thispage.setData({
        expressInfo:data
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
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