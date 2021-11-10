// base/hari-stylist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type:Array,
      value: ''
    },
    lastTime: {  //是否是上次剪发的发型师
      type: null,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleModal() {
      this.setData({
        showModal: true
      })
    },
    closeModal() {
      this.setData({
        showModal: false
      })
    }
  }
})
