//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    banner: [
      {
        id: 0,
        type: 'image',
        url: 'https://i.loli.net/2020/08/19/14fE9HTtxyLQXnP.png'
      },
      {
        id: 1,
        type: 'image',
        url: 'https://i.loli.net/2020/08/19/iSL5sUDea6npAvB.png'
      },
      {
        id: 2,
        type: 'image',
        url: 'https://i.loli.net/2020/08/19/6HXsOpZBlwi12ea.png'
      },
      {
        id: 3,
        type: 'image',
        url: 'https://i.loli.net/2020/08/19/QIhGsUiDoPBd2TH.png'
      }
    ],
    showModal: false,
    store: [
      {
        storeId:1,
        storeName:'最佳Tony工作室',
        price:'39',
        serverItem:'洗剪吹',
        distance: 197,
        address:'西城区苏州街21号',
        activity:'平台用户单，满30减3',
        activityType:2,
      },
      {
        storeId: 2,
        storeName: '世界花园造型',
        price: '42',
        serverItem: '洗剪吹',
        distance: 320,
        address: '海淀区西土城路10号',
        activity: '平台用户单，满35减5',
        activityType: 1,
      },
      {
        storeId: 1,
        storeName: '你的造型工作室',
        price: '38',
        serverItem: '洗剪吹',
        distance: 782,
        address: '海淀区西直门外大街30号',
        activity: '平台用户单，满37减7',
        activityType: 1,
      },
      {
        storeId: 2,
        storeName: '快剪美发',
        price: '37',
        serverItem: '洗剪吹',
        distance: 810,
        address: '海淀区文慧园北路29号',
        activity: '平台用户单，满32减3',
        activityType: 2,
      }
    ]
  },
  handleChange({ detail }) {
    this.setData({
      active: detail.key
    })
  },
  handleConfirm() {
    console.log('点击了确认')
    this.setData({
      showModal: false
    })
  },
  handleClick() {
    this.setData({
      showModal: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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