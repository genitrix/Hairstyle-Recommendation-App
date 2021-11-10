var QQMapWX = require('../../common/libs/qqmap-wx-jssdk.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    full: {
      type: null, // true的话全屏显示
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    mapHeigth: '480rpx',
    longitude:'',
    latitude: '',
    city:'',
    markers: [
      {
        id: 0,
        latitude: 22.5689480000,
        longitude: 113.8708340000,
        iconPath: '/common/images/marker.png'
      },
      {
        id: 1,
        latitude: 22.5664200000,
        longitude: 113.8655000000,
        iconPath: '/common/images/marker.png'
      }  
    ]
  },
  ready() {
    if (this.properties.full) {
      this.setData({
        mapHeigth: '100%'
      })
    }


    let that = this;

    wx.getLocation({
      type: 'gcj02',

      success(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        var city=res.city
        that.setData({
          longitude: longitude,
          latitude: latitude,
          speed: speed,
          accuracy: accuracy
        })
      }
    })
  },
  moved() {

  },
  detached() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleMarker(e) {
      console.log(e)
    }
  }
})
