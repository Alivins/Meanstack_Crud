// 자바스크립트 '엄격 모드' 적용
'use strict';

// 사용할 모듈을 로드한다.
var path = require('path');

// 최초 접속 페이지 index.html을 렌더링 해줌
exports.render = function(req, res) {
	res.sendFile(path.join(__dirname + '/../../public/modules/core/views/core.client.index.html'));
};

// AngularJS에서 HTTP 통신을 테스트 위해 사용
exports.httpTest = function(req, res) {
	res.jsonp({result: '안녕하세요'});
};
