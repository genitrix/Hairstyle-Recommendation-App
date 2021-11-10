// components/svg/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      var t = this, fs = wx.getFileSystemManager(), file = `${wx.env.USER_DATA_PATH}/svg_` + (new Date().valueOf()) + '.svg',
        ishttp = /^https?/.test(t.data.src), isData = ishttp ? !1 : /^(data:image|<svg)/.test(t.data.src), svgData = isData ? t.data.src.replace(/.*(<svg[^>]+>(?:(?!<\/svg>).)*<\/svg>).*/, '$1') : ''
      if (ishttp){
        wx.request({
          url: t.data.src,
          responseType: 'arraybuffer',
          success(res){
            console.log(res)
            var base64 = wx.arrayBufferToBase64(res.data)
            t.setData({
              svgSrc: 'data:image/svg+xml;base64,' + base64
            })
          },
          fail(res) {
            console.log('fail',res)
          }
        })

      } else if (isData && svgData != ''){
        var res = fs.writeFile({
          filePath: file,
          data: svgData,
          success: function (res) {
            console.log(res)
            var base64 = fs.readFileSync(
              file,
              'base64'
            )
            t.setData({
              svgSrc: 'data:image/svg+xml;base64,' + base64
            })
          },
          fail: function (res) { console.log(res) }
        })
      }else{
        console.error('error src')
      }
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
