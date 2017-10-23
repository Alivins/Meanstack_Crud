// 자바스크립트 '엄격 모드' 적용
'use strict';

// NODE_ENV 환경 변수 값 설정
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// 사용할 모듈을 로드한다.
var common = require('./config/env/common');

var app = require('./config/express')();

// node.js 서버를 구동시킨다.
app.listen(common.port);

console.log('Server running at http://localhost:3000/');

// Express application 인스턴스의 외부 사용을 위해 module.exports 속성을 이용해 노출시킨다. 
module.exports = app;