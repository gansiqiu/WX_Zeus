// pages/myInformation/alterInformation/alterInformation.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      academyDisabled:true,   //在选择学校之前无法选择学院
      roleText:"请选择角色",
      showRoll: false,
      schoolText: "请选择院校",
      showSchool:false,
      academyText:"请选择学院",
      showAcademy:false,
      
      visible: false,
      actions: [
         {
            name: '确定',
            color: '#ed3f14'
         },
         {
            name: '取消'
         }
      ],
   },
   selectRole() {
      this.setData({
         showRoll: !this.data.showRoll
      });
   },
   roleTap: function(event) {
      console.log(event);
      this.setData({
         showRoll: !this.data.showRoll,
         roleText: event.currentTarget.dataset.roleName
      });
   },
   selectSchool:function(event){
      this.setData({
         showSchool: !this.data.showSchool
      });
   },
   schoolTap:function(event){
      this.setData({
         showSchool: !this.data.showSchool,
         schoolText: event.currentTarget.dataset.schoolName,
         academyDisabled:false
      });
   },
   selectAcademy:function(event){
      this.setData({
         showAcademy: !this.data.showAcademy
      });
   },
   academyTap:function(event){
      this.setData({
         showAcademy: !this.data.showAcademy,
         academyText: event.currentTarget.dataset.academyName
      });
   },
   submit: function (event) {
      this.setData({
         visible: true
      });
   },
   handleClick: function (event) {
      const index = event.detail.index;
      if (index === 0) {
         const userId = event.currentTarget.dataset.userId;
         wx.navigateBack({
            delta: 1
         })
      }
      this.setData({
         visible: false
      });
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      console.log(options.userId);
      wx.setNavigationBarTitle({
         title: '修改资料',
      })
   }
})