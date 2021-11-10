// pages/design3/design3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Typelist_Man:[
      {
        type:'37分',
        url:["https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg","https://ae01.alicdn.com/kf/Hd15a03eb1da14b4ba8ed0058950962b71.jpg","https://ae01.alicdn.com/kf/Hd43538c578144e158b9e99b41d4c13daN.jpg","https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg","https://ae01.alicdn.com/kf/Hd15a03eb1da14b4ba8ed0058950962b71.jpg","https://ae01.alicdn.com/kf/Hd43538c578144e158b9e99b41d4c13daN.jpg"]
      },
      {
        type:'寸头',
        url:["https://ae01.alicdn.com/kf/H9ba57a40234c491dbd926527b8f7f179Y.jpg","https://ae01.alicdn.com/kf/H882296b5a0344c8f8db47e464315fa374.jpg","https://ae01.alicdn.com/kf/H4608c953048a4730b52feb666d9b03224.jpg","https://ae01.alicdn.com/kf/H13948867b9204808a724994e07925aae0.jpg"]
      },
      {
        type:'平刘海',
        url:["https://ae01.alicdn.com/kf/H43c8d7e1e49144cdb927cc7320b01d28c.jpg","https://ae01.alicdn.com/kf/H91d525b6f16d46eca58e25707a60b3bde.jpg","https://ae01.alicdn.com/kf/Heb04378e6fa44f7ca797ee6231aa37d0U.jpg","https://ae01.alicdn.com/kf/Hbdef68954178413ab4e673be8ee42049B.jpg"]
      },
      {
        type:'卷烫发',
        url:["https://ae01.alicdn.com/kf/H58042d00f80b47e18acecbf6bae1ce90J.jpg","https://ae01.alicdn.com/kf/H9f717a5e362440989272bfe4a5223d62k.jpg","https://ae01.alicdn.com/kf/H2d16db6d148a4f348ce3b66817f0223dl.jpg","https://ae01.alicdn.com/kf/H8d4c8dd492ee4e32b5050d466d4cd20c2.jpg"]
      },
      {
        type:'斜庞克',
        url:["https://ae01.alicdn.com/kf/Hb7f62853e8834291a8e68d7848409468g.jpg","https://ae01.alicdn.com/kf/Hffb3dd0298b14be6938683665c16ab1dJ.jpg","https://ae01.alicdn.com/kf/H2f715560693f4580b08036153eea16c8c.jpg","https://ae01.alicdn.com/kf/Hafa2946234c44edb8b0989f9584acd34a.jpg"]
      },
      {
        type:'中分',
        url:["https://ae01.alicdn.com/kf/H7d2df9cb4405405dadcb3bde354b0f3cU.jpg","https://ae01.alicdn.com/kf/Hbee84d2fae6148b2a1a5aaed33cedfc6a.jpg","https://ae01.alicdn.com/kf/H7823061cf71141fa97b43ce887b256005.jpg","https://ae01.alicdn.com/kf/Hcfe1ad70335b439088b67b10c2335f98r.jpg"]
      }],
      Typelist_Woman:[
        {
          type:'短发',
          url:["https://ae01.alicdn.com/kf/H9ba57a40234c491dbd926527b8f7f179Y.jpg",]
        },
        {
          type:'中发',
          url:["https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg"]
        },
        {
          type:'长发',
          url:["https://ae01.alicdn.com/kf/H43c8d7e1e49144cdb927cc7320b01d28c.jpg","https://ae01.alicdn.com/kf/H91d525b6f16d46eca58e25707a60b3bde.jpg","https://ae01.alicdn.com/kf/Heb04378e6fa44f7ca797ee6231aa37d0U.jpg","https://ae01.alicdn.com/kf/Hbdef68954178413ab4e673be8ee42049B.jpg"]
        },
        {
          type:'超长发',
          url:["https://ae01.alicdn.com/kf/H58042d00f80b47e18acecbf6bae1ce90J.jpg","https://ae01.alicdn.com/kf/H9f717a5e362440989272bfe4a5223d62k.jpg","https://ae01.alicdn.com/kf/H2d16db6d148a4f348ce3b66817f0223dl.jpg","https://ae01.alicdn.com/kf/H8d4c8dd492ee4e32b5050d466d4cd20c2.jpg"]
        },
        {
          type:'斜庞克',
          url:["https://ae01.alicdn.com/kf/Hb7f62853e8834291a8e68d7848409468g.jpg","https://ae01.alicdn.com/kf/Hffb3dd0298b14be6938683665c16ab1dJ.jpg","https://ae01.alicdn.com/kf/H2f715560693f4580b08036153eea16c8c.jpg","https://ae01.alicdn.com/kf/Hafa2946234c44edb8b0989f9584acd34a.jpg"]
        },
        {
          type:'中分',
          url:["https://ae01.alicdn.com/kf/H7d2df9cb4405405dadcb3bde354b0f3cU.jpg","https://ae01.alicdn.com/kf/Hbee84d2fae6148b2a1a5aaed33cedfc6a.jpg","https://ae01.alicdn.com/kf/H7823061cf71141fa97b43ce887b256005.jpg","https://ae01.alicdn.com/kf/Hcfe1ad70335b439088b67b10c2335f98r.jpg"]
        }],
        currentTypelist:[
          {
            type:'37分',
            url:["https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg","https://ae01.alicdn.com/kf/Hd15a03eb1da14b4ba8ed0058950962b71.jpg","https://ae01.alicdn.com/kf/Hd43538c578144e158b9e99b41d4c13daN.jpg","https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg","https://ae01.alicdn.com/kf/Hd15a03eb1da14b4ba8ed0058950962b71.jpg","https://ae01.alicdn.com/kf/Hd43538c578144e158b9e99b41d4c13daN.jpg"]
          },
          {
            type:'寸头',
            url:["https://ae01.alicdn.com/kf/H9ba57a40234c491dbd926527b8f7f179Y.jpg","https://ae01.alicdn.com/kf/H882296b5a0344c8f8db47e464315fa374.jpg","https://ae01.alicdn.com/kf/H4608c953048a4730b52feb666d9b03224.jpg","https://ae01.alicdn.com/kf/H13948867b9204808a724994e07925aae0.jpg"]
          },
          {
            type:'平刘海',
            url:["https://ae01.alicdn.com/kf/H43c8d7e1e49144cdb927cc7320b01d28c.jpg","https://ae01.alicdn.com/kf/H91d525b6f16d46eca58e25707a60b3bde.jpg","https://ae01.alicdn.com/kf/Heb04378e6fa44f7ca797ee6231aa37d0U.jpg","https://ae01.alicdn.com/kf/Hbdef68954178413ab4e673be8ee42049B.jpg"]
          },
          {
            type:'卷烫发',
            url:["https://ae01.alicdn.com/kf/H58042d00f80b47e18acecbf6bae1ce90J.jpg","https://ae01.alicdn.com/kf/H9f717a5e362440989272bfe4a5223d62k.jpg","https://ae01.alicdn.com/kf/H2d16db6d148a4f348ce3b66817f0223dl.jpg","https://ae01.alicdn.com/kf/H8d4c8dd492ee4e32b5050d466d4cd20c2.jpg"]
          },
          {
            type:'斜庞克',
            url:["https://ae01.alicdn.com/kf/Hb7f62853e8834291a8e68d7848409468g.jpg","https://ae01.alicdn.com/kf/Hffb3dd0298b14be6938683665c16ab1dJ.jpg","https://ae01.alicdn.com/kf/H2f715560693f4580b08036153eea16c8c.jpg","https://ae01.alicdn.com/kf/Hafa2946234c44edb8b0989f9584acd34a.jpg"]
          },
          {
            type:'中分',
            url:["https://ae01.alicdn.com/kf/H7d2df9cb4405405dadcb3bde354b0f3cU.jpg","https://ae01.alicdn.com/kf/Hbee84d2fae6148b2a1a5aaed33cedfc6a.jpg","https://ae01.alicdn.com/kf/H7823061cf71141fa97b43ce887b256005.jpg","https://ae01.alicdn.com/kf/Hcfe1ad70335b439088b67b10c2335f98r.jpg"]
          }],
      currentTarget:["https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg","https://ae01.alicdn.com/kf/Hd15a03eb1da14b4ba8ed0058950962b71.jpg","https://ae01.alicdn.com/kf/Hd43538c578144e158b9e99b41d4c13daN.jpg","https://ae01.alicdn.com/kf/H6f8272e5e90b49b9a4373fcb072a65ecd.jpg","https://ae01.alicdn.com/kf/H13bbd98025b440c18ff129738cd17e44q.jpg","https://ae01.alicdn.com/kf/Hd15a03eb1da14b4ba8ed0058950962b71.jpg","https://ae01.alicdn.com/kf/Hd43538c578144e158b9e99b41d4c13daN.jpg"],
      bg:"https://i.loli.net/2020/08/19/jWGnRMF4XNYCgy6.png",
      currentSex:'male',
      currentTypeIndex:0,
      currentHairIndex:-1,
      currentGenderPic:"../../images/man.png",
      genderPic:["../../images/man.png","../../images/woman.png"],
      image_people:'',
      
      pic_Height:200,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app=getApp()
    var outthis=this;
    this.setData({
      currentSex:app.globalData.gender,
      gender:app.globalData.gender,
      currentTypeIndex:0,
      currentHairIndex:-1,
      image_people:app.globalData.image_people,
      currentGenderPic:this.data.genderPic[0],
    })
    wx.getImageInfo({
      src: app.globalData.image_people,
      success:function(my)
      {
        // console.log(my.height)
        // console.log(my.width)
        outthis.setData({
          pic_Height:650*my.height/my.width
        })
        // console.log(outthis.data.pic_Height)
      }
    })
  },
  changeTypeImg: function(t) {
    // console.log(t.currentTarget.dataset.operation),
    // console.log(this.data.currentHairIndex)
    this.setData({
        currentTypeIndex:t.currentTarget.dataset.operation,
        currentTarget:this.data.currentTypelist[t.currentTarget.dataset.operation].url,
        currentHairIndex:-1,
    })
},
changeHairImg: function(t) {
  console.log(t.currentTarget.dataset.operaton)
    this.setData({
        currentHairIndex:t.currentTarget.dataset.operation,   
    })
    // Merge_image=this.data.currentTypeIndex[this.data.currentTypeIndex].url[this.data.currentHairIndex]
    // image=this.data.image_people

    //此处应为人脸融合api
    //融合后的人脸图片放在this.data.image_people里
},
Refresh: function(t) {
  var app=getApp()
    this.setData({
        currentTypeIndex:0,
        currentHairIndex:-1,
        currentTypelist:this.data.Typelist_Man,
        currentTarget:this.data.Typelist_Man[0].url,
        currentGenderPic:this.data.genderPic[0],
        image_people:app.globalData.image_people,
        currentSex:'male',
    })
},
  changeSex:function(){
    console.log('123456')
    this.data.currentSex=='male'?this.setData({
      currentSex:'female',
      currentGenderPic:this.data.genderPic[1],
      currentTypelist:this.data.Typelist_Woman,
      //写成currentTarget:this.data.currentTypelist[0].url就执行不了,推测是异步执行的机制
      currentTarget:this.data.Typelist_Woman[0].url,
      currentTypeIndex:0,
      currentHairIndex:-1,
    }):this.setData({
      currentSex:'male',
      currentGenderPic:this.data.genderPic[0],
      currentTypelist:this.data.Typelist_Man,
      currentTarget:this.data.Typelist_Man[0].url,
      currentTypeIndex:0,
      currentHairIndex:-1,
    })


    //这么写会因为异步机制触发不了
    // switch(this.data.currentSex){
    //   case 'male':
    //     this.data.currentSex='female'
    //     this.data.currentGenderPic=this.data.genderPic[1]
    //     console.log('已修改为女性')
    //     break;
    //   case 'female':
    //     this.data.currentSex='male'
    //     this.data.currentGenderPic=this.data.genderPic[0]
    //     console.log('已修改为男性')
    //     break;
    //   default:
    //     console.log(this.data.currentSex)
    //     break;
    // }
    // switch(this.data.currentSex){
    //   case 'male':

    //     break;
    //   case 'female':
    //     this.data.currentTypelist=this.data.Typelist_Woman
    //     this.data.currentTarget=this.data.currentTypelist[0].url
    //     break;
    // }
  },
  saveAction:function(){
    var that=this
    wx.downloadFile({
      url: that.data.image_people,
    success:function (res) {
        console.log(res);
    //图片保存到本地
        wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success:function (data) {
        console.log(data);
        },
        fail:function (err) {
        console.log(err);
        },
      })
    },
    fail:function (err) {
      console.log(err);
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})