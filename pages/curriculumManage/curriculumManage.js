//index.js
//获取应用实例
const app = getApp()

Page({
   data: {
      dataList: [],
      aoData: { limit: 10, offset: 0 }
   },
   //事件处理函数
   checkAssignment: function (event){
      console.log(event.currentTarget.dataset.assignmentId);
   },
   onLoad:function(){
      var that = this;
      wx.request({
         url: 'http://localhost:8080/Zeus/curriculum/getCurriculumListByPage',
         data:this.data.aoData,
         success:function(res){
            console.log(res);
            that.setData({
               dataList:res.data.object.list
            })
         }
      })
   }
})