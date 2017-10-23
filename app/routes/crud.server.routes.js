// 자바스크립트 '엄격 모드' 적용
'use strict';

// 사용할 모듈을 로드한다.
var Crud = require('../../app/controllers/crud.server.controller');


module.exports = function(app) {

	// crud board 관련 라우트 
	app.route('/api/crud')
	   	.get(Crud.list)			
	   	.post(Crud.add);			
	   	

	// crud board 관련 라우트 
	app.route('/api/crud/:crud_id')
		.get(Crud.get)			
		.put(Crud.update)			
		.delete(Crud.delete);
};