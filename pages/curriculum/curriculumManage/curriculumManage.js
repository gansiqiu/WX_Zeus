// pages/alterCurriculum/alterCurriculum.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      dataList: [
         { id: 1, name: "课程1" }, { id: 2, name: "课程2" }, { id: 3, name: "课程3" }, { id: 4, name: "课程4" }, 
         { id: 5, name: "课程5" },{ id: 6, name: "课程6" }, { id: 7, name: "课程7" }, { id: 8, name: "课程8" }, 
         { id: 9, name: "课程9" }, { id: 10, name: "课程10" }, { id: 11, name: "课程11" }, { id: 12, name: "课程12" }
      ],
      aoData: { limit: 10, offset: 0 }
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
   /**
    * 新建事件
    */
   createCurriculum:function(event){
      wx.navigateTo({
         url: '/pages/curriculum/alterCurriculum/alterCurriculum?curriculumId=' + 0,
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      var that = this;
      // wx.request({
      //    url: 'http://localhost:8080/Zeus/curriculum/getCurriculumListByPage',
      //    data: this.data.aoData,
      //    success: function (res) {
      //       console.log(res);
      //       that.setData({
      //          dataList: res.data.object.list
      //       })
      //    }
      // })
   },
})