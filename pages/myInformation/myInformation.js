// pages/myInformation/myInformation.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      value1: "1223720954@qq.com",
      value2: "1223720954",
      value3: "甘四球",
      value4: "gansiqiu",
      value5: "15387567171",
      value6: "老师",
      value7: "湖南大学",
      value8: "艺术设计学院",
   },
   changeUserInfo: function(event) {
      console.log(event)
      const userId = event.currentTarget.dataset.userId;
      wx.navigateTo({
         url: '/pages/myInformation/alterInformation/alterInformation?userId=' + userId,
      });
      this.setData({
         visible: false
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      wx.setNavigationBarTitle({
         title: '我的资料',
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
})