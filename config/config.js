// 자바스크립트 '엄격 모드' 적용
'use strict';

// 글로벌 환경변수 NODE_ENV에 지정되어 있는 환경 구성에 따라 구성 파일을 로드한다.
module.exports = require('./env/' + process.env.NODE_ENV + '.js');