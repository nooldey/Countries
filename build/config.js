 /* 
 * @Author: nooldey 
 * @Date: 2017-11-20 09:36:29 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-12-20 15:55:20
 * @Description: webpack属性设置
 */

const path = require('path')
const dist = path.resolve(__dirname, '../dist')
const { siteTitle } = require('../config/site')

module.exports = {
	pub: {
		html: 'index.html',
		inject: true,
		template: 'src/index.html',
		title: siteTitle,
		assetsPublicPath: '/Countries/'
	},
	dev: {
		env: 'development',
		port: 88,
		// proxyTable: {
		// 	'/demoapi': {
		// 		target: 'http://zhuweisheng.com.cn',
		// 		changeOrigin: true
		// 	}
		// }
	},
	end: {
		env: 'production',
		port: 80,
		// favicon: require('./src/assets/favicon.ico'),
		assetsRoot: dist
	}
}
