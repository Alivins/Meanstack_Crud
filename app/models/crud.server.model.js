// 자바스크립트 '엄격 모드' 적용
'use strict';

// 사용할 모듈을 로드한다.
var mongoose = require('mongoose'),
	connection = require('../../config/mongoose'),
	Schema = mongoose.Schema;

// mongoose 모듈을 이용해 스키마를 정의한다.
// 코드 상에서 저장의 편의성 정의하는 스키마일 뿐이다.
// MongoDB 상 문서의 확장, 축소에는 영향을 미치지 않는다. 
var CrudSchema = new Schema({
	
	crud_subject: {
		type: String,
		default: '',
		trim: true
	},
	
	crud_writer: {
		type: String,
		default: '',
		trim: true
	},

	crud_contents: {
		type: String,
		default: '',
		trim: true
	}
});

// 해당 커넥션의 모델로 등록해준다.
var Crud = connection.model('Crud', CrudSchema);

module.exports = Crud;