// pages/assignment/assignmentDetail/assignmentDetail.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      currentTab: "0",
      autoHeight: 500,
      showLoadMore:false,
      dataList: [
         [
            { "id": 11, "name": 11111, "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": 12, "name": 22222, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": 13, "name": 33333, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
            { "id": 14, "name": 11111, "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": 15, "name": 22222, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": 16, "name": 33333, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" }, 
            { "id": 17, "name": 11111, "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": 18, "name": 22222, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": 19, "name": 33333, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" }
         ],
         [
            { "id": 21, "name": 1111111,"imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"},
            { "id": 22, "name": 2222222,"imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"}
         ],
         [
            { "id": 31,"name": 11111111,"imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": 32,"name": 222222222, "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" }
         ]
      ]
   },
   handleChange: function(event) {
      this.setData({
         currentTab: event.detail.key,
         autoHeight: this.data.dataList[event.detail.key].length * 120,
         showLoadMore: false
      })
   },
   bindchange: function(event) {
      this.setData({
         currentTab: event.detail.current,
         autoHeight: this.data.dataList[event.detail.current].length * 120,
         showLoadMore: false
      })
      // console.log(this.data.autoHeight);
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      this.setData({
         autoHeight: this.data.dataList[0].length * 120,
         showLoadMore: false
      })
      // console.log(this.data.autoHeight);
   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {
      // console.log("1111111111111111111");
      this.setData({
         showLoadMore : true
      })
   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
})