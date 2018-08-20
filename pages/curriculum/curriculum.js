//index.js
//获取应用实例
const app = getApp()

Page({
   data: {
      dataList: [
         { id: 1, name: "课程1", createTime: "2018-8-20" }, { id: 2, name: "课程2", createTime: "2018-8-20" }, { id: 3, name: "课程3", createTime: "2018-8-20" }, { id: 4, name: "课程4", createTime: "2018-8-20"  },
         { id: 5, name: "课程5", createTime: "2018-8-20" }, { id: 6, name: "课程6", createTime: "2018-8-20" }, { id: 7, name: "课程7", createTime: "2018-8-20"  }, { id: 8, name: "课程8", createTime: "2018-8-20"  },
         { id: 5, name: "课程5", createTime: "2018-8-20"  }, { id: 6, name: "课程6", createTime: "2018-8-20"  }, { id: 7, name: "课程7", createTime: "2018-8-20"  }, { id: 8, name: "课程8", createTime: "2018-8-20"  }
      ],
      aoData: { limit: 10, offset: 0 }
   },
   //事件处理函数
   goCurriculumDetail:function(event){
      console.log(event);
      wx.navigateTo({
         url: '/pages/curriculum/curriculumManage/curriculumManage?curriculumId='+event.currentTarget.dataset.curriculumName,
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