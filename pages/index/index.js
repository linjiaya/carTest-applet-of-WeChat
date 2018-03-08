//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    num : null,
    msg: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  inputFuc : function (e){
    // console.log(e);
    this.setData({num:e.detail.value});
  },
  btnClick : function (){
    console.log(this.data.num);
    var data = { subject: '1', model: 'c1', testType: 'rand', key:'bf5eeb34e4e1ce4621003fd63f421cf1'};
    var msgData = this;
    app.searchKuaiDi(data,function(response){
      console.log(response);
      msgData.setData({msg:response});
    })
  }
})
