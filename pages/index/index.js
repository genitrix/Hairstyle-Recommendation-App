const AV = require('../../utils/av-weapp.js')
var URL37icon = require('svg.js')
const app=getApp();
Page({
	data: {
		URLbook:"https://i.loli.net/2020/08/19/LBnqowRrQSU28it.png",
		URLdesign:"https://i.loli.net/2020/08/19/e8aDYoQg7HJwKNv.png",
		URLwode:"https://i.loli.net/2020/08/19/WbZpa6KmhoiL9Gv.png",
		banner: ["https://i.loli.net/2020/08/19/RApJvt9lDeZL8sa.png","https://i.loli.net/2020/08/19/zq1tsPCg4JW9UAK.png","https://i.loli.net/2020/08/19/VFSsXqhzy2fIu9c.png","https://i.loli.net/2020/08/19/na3wsktuhb5fKOr.png"],
		bannerHeight: Math.ceil(250 / 750.0 * getApp().screenWidth)
	},

	onLoad: function (options) {
		// var app=getApp()
		// wx.getUserInfo({
		// 	success: function(res) {
		// 		app.globalData.nickName = res.userInfo.nickName
		// 		app.globalData.avatarUrl = res.userInfo.avatarUrl
		// 	}
		// })
	},
	getInviteCode: function (options) {
		if (options.uid != undefined) {
			wx.showToast({
				title: '来自用户:' + options.uid + '的分享',
				icon: 'success',
				duration: 2000
			})
		}
	},

	showCategories: function (e) {
		const operation=e.currentTarget.dataset.operation
		wx.switchTab({
			url: "../"+operation,
		})
	},

	onShareAppMessage: function () {
		return {
			title: '灵动开源电商系统',
			desc: '一个基于LeanCloud开发的开源电商系统',
			path: '/pages/index/index?uid=4719784'
		}
	},

	handletap(e){
    this.setData({
      num:this.data.num+operation
    })
  }
})

	// loadBanner: function () {
	// 	var that = this;
	// 	var query = new AV.Query('Banner');
	// 	// query.include('image');
	// 	query.find().then(function (bannerObjects) {
	// 		var banner = [];
	// 		for (var i = 0; i < bannerObjects.length; i++) {
	// 			banner.push(bannerObjects[i].get('image').get('url'));
	// 		}
	// 		that.setData({
	// 			banner: banner
	// 		});
	// 	});
	// },
	// loadMainGoods: function () {
	// 	var that = this;
	// 	var query = new AV.Query('Goods');
	// 	query.equalTo('isHot', true);
	// 	query.find().then(function (goodsObjects) {
	// 		that.setData({
	// 			goods: goodsObjects
	// 		});
	// 	});
	// },
	// showDetail: function (e) {
	// 	var index = e.currentTarget.dataset.index;
	// 	var goodsId = this.data.goods[index].id;
		
	// 	wx.navigateTo({
	// 		url: "../goods/detail/detail?objectId=" + goodsId

	// 	});
	// },

	// showOrders: function () {
	// 	wx.navigateTo({
	// 		url: "../order/list/list?status=1"
	// 	});
	// },
