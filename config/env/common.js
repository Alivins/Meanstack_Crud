// 자바스크립트 '엄격 모드' 적용
'use strict';

// 공통의로 사용될 설정들
module.exports = {
	app: {
		title: 'Mean Stack CRUD Application',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'mean, mongodb, angularjs, nodejs, crud'
	},
	// Port Number
	port: process.env.PORT || 3000,
	// static 폴더
	staticDir: './public',
	// sessionSecret
	sessionSecret: 'meancrud'
};