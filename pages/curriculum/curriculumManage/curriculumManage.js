// pages/alterCurriculum/alterCurriculum.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      dataList: [],
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
      wx.request({
         url: 'http://localhost:8080/Zeus/curriculum/getCurriculumListByPage',
         data: this.data.aoData,
         success: function (res) {
            console.log(res);
            that.setData({
               dataList: res.data.object.list
            })
         }
      })
   },
})