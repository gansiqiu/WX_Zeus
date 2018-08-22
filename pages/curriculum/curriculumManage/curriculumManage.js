// pages/alterCurriculum/alterCurriculum.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      curriculumName:"2018第一学期",
      curriculumIntroduce:"需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'"
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