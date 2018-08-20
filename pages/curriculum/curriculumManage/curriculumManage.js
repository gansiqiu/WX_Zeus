// pages/alterCurriculum/alterCurriculum.js
Page({

   /**
    * 页面的初始数据
    */
   data: {

   },
   /*
      修改事件
    */
   changeCurriculum:function(event){
      var curriculumId = event.target.dataset.curriculumId;
      wx.navigateTo({
         url: '/pages/curriculum/alterCurriculum/alterCurriculum?curriculumId=' + curriculumId,
      })
   },
   goAssignmentManage:function(event){
      var curriculumId = event.target.dataset.curriculumId;
      wx.navigateTo({
         url: '/pages/assignment/assignmentManage/assignmentManage?curriculumId=' + curriculumId,
      }) 
   },
   goAssignmentSubmission:function(event){
      var curriculumId = event.target.dataset.curriculumId;
      wx.navigateTo({
         url: '/pages/assignment/assignmentSubmission/assignmentSubmission?curriculumId=' + curriculumId,
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      console.log(options)
      var that = this;
      wx.setNavigationBarTitle({
         title: options.curriculumId + "详情",
      })
      
   },
})