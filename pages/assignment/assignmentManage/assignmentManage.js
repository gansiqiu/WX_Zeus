// pages/assignment/assignmentManage/assignmentManage.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      dataList:[
         { id: 1, name: "学生1", assignmentId: 1 }, { id: 2, name: "学生2", assignmentId: 2 }, 
         { id: 3, name: "学生3", assignmentId: 3 }, { id: 4, name: "学生4", assignmentId: 4 }, 
         { id: 5, name: "学生5", assignmentId: 5 }, { id: 6, name: "学生6", assignmentId: 6 }, 
         { id: 7, name: "学生7", assignmentId: 7 }, { id: 8, name: "学生8", assignmentId: 8 }, 
         { id: 9, name: "学生9", assignmentId: 9 }, { id: 10, name: "学生10", assignmentId: 10 }, 
         { id: 11, name: "学生11", assignmentId: 11 }, { id: 12, name: "学生12", assignmentId: 12 }
      ]
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      console.log(options.curriculumId);
      wx.setNavigationBarTitle({
         title: '作业详情',
      })
   },
   checkDetail:function(event){
      console.log(event);
      wx.navigateTo({
         url: '/pages/assignment/assignmentDetail/assignmentDetail',
      })
   }
})