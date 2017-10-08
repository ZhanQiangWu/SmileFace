
//事件
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
  }, 

  //点击事件处理函数
  view1Click: function(event){
    console.log("view1Click");
    console.log(event);
  },
  view2Click: function(event){
    console.log("view2Click");
    console.log(event);
  },
  view3Click: function(event){
    console.log("view3Click");
  }


})