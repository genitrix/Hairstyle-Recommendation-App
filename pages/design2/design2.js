// pages/design2/design2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_people:"../../images/bg.jpg",
    access_token:'',
    type:0,  //默认脸型类型，默认为椭圆
    show_Des:'',
    show_Pic:'',
    bg:"https://i.loli.net/2020/08/19/jWGnRMF4XNYCgy6.png",
    Text:['https://i.loli.net/2020/08/19/78Yu3MZeUti6ERm.png','https://i.loli.net/2020/08/19/aCmsPjGtHliUbkn.png'],  //前者为男性，后者为女性
    show_Text:'https://i.loli.net/2020/08/19/78Yu3MZeUti6ERm.png',
    des:[
      {
        type:'男椭圆脸oval',
        description:'前额饱满、与颧骨几乎等宽度、下颌骨圆润、下巴略尖；比例协调，脸宽约是脸长的三分之二。',
        url:'../../images/newimage/tuoyuan.png'
      },
      {
        type:'男方脸square',
        description:'前额饱满，颧骨与下颌骨等宽或下颌骨略窄一些，脸宽与脸长比较接近，整体脸型呈方形或长方形，下巴短或比较平。',
        url:'../../images/newimage/fang.png'
      },
      {
        type:'男三角脸triangle',
        description:'三角形脸也叫梨形脸，主要特点是额头窄，脸部有肉感或者下颌骨较宽。',
        url:'../../images/newimage/sanjiao.png'
      },
      {
        type:'男心形脸heart',
        description:'心型脸更为普遍，就是下巴过窄，脑门过于宽大。',
        url:'../../images/newimage/xin.png'
      },
      {
        type:'男圆脸round',
        description:'圆形脸在选择发型的时候需要注意减小脸的宽度；并增加脸的长度：侧分后梳、渐变寸头、底切背头、渐变庞巴度',
        url:'../../images/newimage/yuan.png'
      },
      {
        type:'女椭圆脸oval',
        description:'瓜子脸上部略圆，下部略尖，形似瓜子，比鹅蛋脸削瘦。',
        url:'../../images/newimage/tuoyuan.png'
      },
      {
        type:'女方脸square',
        description:'特点：长方形的脸型上下的落差较大，横向距离又小，且额头较宽。',
        url:'../../images/newimage/fang.png'
      },
      {
        type:'女三角脸triangle',
        description:'特点：三角形脸的特征是窄额头、宽下巴。',
        url:'../../images/newimage/sanjiao.png'
      },
      {
        type:'女心形脸heart',
        description:'心形脸，是倒三角脸的一种，脸部轮廓特征接近T形，尤其下巴前翘明显。如果眉弓上扬，发迹线有美人尖，则为地道的心形脸。',
        url:'../../images/newimage/xin.png'
      },
      {
        type:'女圆脸round',
        description:'特点：圆圆的脸型，一方面圆润的脸蛋会让你显得娇小可爱，但同时也会让你的脸显得肉嘟嘟的。',
        url:'../../images/newimage/yuan.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在努力分析您的脸型等数据',
    })
    var app=getApp()
    this.setData({
     image_people:app.globalData.image_people
    })
    this.getBeauty()
    
    
  },
  faceUpload() {
    //调用接口，获取token
    var mythis=this
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token', //百度智能云相关的接口地址
      data: {
        grant_type: 'client_credentials',
        client_id: 'W4pGhMjdAGMLLlzBGiiaYGnk',//用你创建的应用的API Key
        client_secret: '1GSfWmVogGafXH3ZsHVlpwpfCmySa55L'//用你创建的应用的Secret Key
      },
      header: {
        'Content-Type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data.refresh_token)
        mythis.setData({
            access_token:res.data.refresh_token
        })
        console.log(mythis.access_token)
      }
    })
  },
  getBeauty:function(){
    this.faceUpload()
    var app=getApp()
    var src = this.data.image_people
    var imgbase = wx.getFileSystemManager().readFileSync(src, "base64")
    console.log(imgbase)
    var that = this
      wx.request({
       method:"POST",
        url:"https://aip.baidubce.com/rest/2.0/face/v3/detect",
        data:{
          image_type:'BASE64',
          access_token: "24.670c2380dc73cd6ff9c8986229abaa27.2592000.1601881026.282335-20652486",
          face_field:'age,beauty,face_shape,gender',
          image: imgbase
        },
        header:{
          'Content-Type':'application/x-www-form-urlencoded'
        },
        success(res)
        {
          console.log(res)
          switch(res.data.result.face_list[0].gender.type){
            case 'male':
              that.data.show_Text=that.data.Text[0]
              switch(res.data.result.face_list[0].face_shape.type){
                case 'oval':
                  that.setData({
                    show_Des:that.data.des[0].description,
                    show_Pic:that.data.des[0].url,
               }) 
                  break;
                case 'square':
                  that.setData({
                    show_Des:that.data.des[1].description,
                    show_Pic:that.data.des[1].url,
               }) 
                  break;
                  case 'triangle':
                    that.setData({
                      show_Des:that.data.des[2].description,
                      show_Pic:that.data.des[2].url,
                 }) 
                    break;
                  case 'heart':
                    that.setData({
                      show_Des:that.data.des[3].description,
                      show_Pic:that.data.des[3].url,
                 }) 
                    break;
                    case 'round':
                      that.setData({
                        show_Des:that.data.des[4].description,
                        show_Pic:that.data.des[4].url,
                   }) 
                      break;
              }
              break;
            case 'female':
              that.data.show_Text=that.data.Text[1]
              switch(res.data.result.face_list[0].face_shape.type){
                case 'oval':
                  that.setData({
                    show_Des:that.data.des[5].description,
                    show_Pic:that.data.des[0].url,
               }) 
                  break;
                case 'square':
                  that.setData({
                    show_Des:that.data.des[6].description,
                    show_Pic:that.data.des[1].url,
               }) 
                  break;
                  case 'triangle':
                    that.setData({
                      show_Des:that.data.des[7].description,
                      show_Pic:that.data.des[2].url,
                 }) 
                    break;
                  case 'heart':
                    that.setData({
                      show_Des:that.data.des[8].description,
                      show_Pic:that.data.des[3].url,
                 }) 
                    break;
                    case 'round':
                      that.setData({
                        show_Des:that.data.des[9].description,
                        show_Pic:that.data.des[4].url,
                   }) 
                      break;
              }
              break;
          }
          
          that.setData({
          age: res.data.result.face_list[0].age,
          beauty: res.data.result.face_list[0].beauty,
          face_shape:res.data.result.face_list[0].face_shape.type,
          gender:res.data.result.face_list[0].gender.type,
          })
          wx.hideLoading({
            complete: (res) => {},
          })
       },
       fail(){
        wx.showToast({
          title: '识别失败',
          icon: 'none',
          duration: 2000//持续的时间
        })
       }
    })
},
  MyNavigator2to3:function(){
    wx.navigateTo({
      url: '../design3/design3',
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