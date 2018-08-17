//index.js
//获取应用实例
const app = getApp()

Page({
   data: {
      dataList: [
         { id: 1, name: "课程1" }, { id: 2, name: "课程2" }, { id: 3, name: "课程3" }, { id: 4, name: "课程4" },
         { id: 5, name: "课程5" }, { id: 6, name: "课程6" }, { id: 7, name: "课程7" }, { id: 8, name: "课程8" },
         { id: 5, name: "课程5" }, { id: 6, name: "课程6" }, { id: 7, name: "课程7" }, { id: 8, name: "课程8" }
      ],
      aoData: { limit: 10, offset: 0 }
   },
   //事件处理函数
   checkAssignmentManage: function (event){
      wx.navigateTo({
         url: '/pages/assignment/assignmentManage/assignmentManage?curriculumId=' + event.currentTarget.dataset.curriculumId,
      })
   },
   checkAssignmentSubmission:function(event){
      wx.navigateTo({
         url: '/pages/assignment/assignmentSubmission/assignmentSubmission?curriculumId=' + event.currentTarget.dataset.curriculumId
      })
   },
   onLoad:function(){
      // var that = this;
      // wx.request({
      //    url: 'http://localhost:8080/Zeus/curriculum/getCurriculumListByPage',
      //    data:this.data.aoData,
      //    success:function(res){
      //       console.log(res);
      //       that.setData({
      //          dataList:res.data.object.list
      //       })
      //    }
      // })
   }
})