
// 初始化AV
const AV = require('./utils/av-weapp.js');
const appId = "7tm1OFlNlmLFukegUhmm4uDU-gzGzoHsz";
const appKey = "XG4FRumQWJ7mNkFIral0ttvj";


// 授权登录
App({
	onLaunch: function () {
		wx.cloud.init({
			env:'smartcut-pquxq'
		})  
		// 设备信息
		// wx.getSystemInfo({
		// 	success: function(res) {
		// 		that.screenWidth = res.windowWidth;
		// 		that.screenHeight = res.windowHeight;
		// 		that.pixelRatio = res.pixelRatio;
		// 	}
		// });
	
	},
	globalData:{
		colorList: { //default, primary, ghost, info, success, warning, error
			default: '#333', //主要字体
			success: '#6c6982', //
			primary: '#8f74fa', // 主题色:按钮 tabs背景 弹窗确认按钮
			error: '#ff3d3d', // 价格颜色
			warning: '#c2b4fc', // 标签色
			info:'#c9c9c9',  // 灰色按钮
			explain: '#999999', // 灰色字体
			ghost:'#4d4d4d', // 评论处按钮
			white:'white',
			button:'linear-gradient(45deg, #9171fa, #8286fc)',
			tabBg: 'linear-gradient(45deg, #9b5ff3, #8285fc)',
		},
			image_people:'pages/design1/1.png',
			gender:'male',
			},
		
})
