// 자바스크립트 '엄격 모드' 적용
'use strict';

// 사용할 모듈을 로드한다.
var index = require('../controllers/index.server.controller');

module.exports = function(app) {

	// AngularJS에서 HTTP 통신을 테스트 위해 사용돌 라우트
	app.get('/api/core', index.httpTest);
	
	// 최초 접속
	app.route('*').get(index.render);

};