// pages/assignment/assignmentSubmission/assignmentSubmission.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     totalNum:60,
     deliveryNum:50,
     nondeliveryNum:10
  },
   checkAssignmentDetail:function(event){
      console.log(event);
      wx.navigateTo({
         url: '/pages/assignment/assignmentDetail/assignmentDetail',
      })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.setNavigationBarTitle({
        title: '作业提交情况',
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