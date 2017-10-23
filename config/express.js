// 자바스크립트 '엄격 모드' 적용
'use strict';

// 사용할 모듈을 로드한다.
var common = require('./env/common.js'),
	express = require('express'),
	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	session = require('express-session')

// Express 환경 정의
module.exports = function() {
	// 새로운 express 인스턴스 생성
	var app = express();

	// process.env는 전역 변수이며, 미리 정의된 환경 변수에 대한 접근을 허용한다.
	// process.env.NODE_ENV 환경 변수는 현재 환경 설정을 위해 사용된다.
	if (process.env.NODE_ENV === 'development') {
		// 로거에 사용되는 morgan 모듈
		app.use(morgan('dev'));				
	} else if (process.env.NODE_ENV === 'production') {
		// 응답 객체 압축에 사용되는 compress 모듈
		app.use(compress());
	}


	/*
	 *   미들웨어 등록
	 *   순서를 주의한다.
	 *   미들웨어는 요청에 대한 처리 후 다음 단계에 결과 전달한다.
	 *   결과를 전달하는 단계들을 잘 고려해서 등록 순서를 정한다.
	 */


	// favicon 등록
	app.use(favicon(__dirname + '/../public/modules/favicon.ico'));

	
	// CORS(Cross-Origin Resource Sharing) 사전 예방을 위한 셋팅
	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
   		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});
  
	// 요청 데이터를 처리하는 bodyParser 모듈
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	// 쿠키 추출을 위한 cookie-parser 등록
	app.use(cookieParser());
	// DELETE와 PUT HTTP 동사 기본 지원 기능을 제공하는 method-override 모듈
	app.use(methodOverride());

	// 세션은 애플리케이션을 방문할 때 사용자의 행동 방식을 추척하게 허용하는 기능이다.
	// express-session 모듈을 이용하고 해당 모듈은 현재 사용자를 식별하기 위해 서명된 식별자를 쿠키에 저장한다.
	// 세션 식별자를 서명하기 위해, 비밀 문자열을 사용한다.
	// 이는 악성 세션 위조를 방지하는 과정에 이용된다.
	// session 미들웨어는 애플리케이션의 모든 요청 객체에 session 객체를 추가한다.
	// 이 session 객체를 사용해 현재 세션에서 사용하기를 원하는 어떤 속성도 설정하거나 인출할 수 있다.

	// Express MongoDB 세션 스토어 사용
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: common.sessionSecret
	}));

	// 정적 폴더 위치를 결정한다. 
  	app.use(express.static(common.staticDir));

	// 라우팅 파일을 호출하며 파라미터로로 express 객체를 넘긴다.
	require('../app/routes/crud.server.routes.js')(app);


	// index는 무조건 가장 밑에 둔다. 그래야 위에 다 찾아보고 없으면 index를 띄워줌
	require('../app/routes/index.server.routes.js')(app);


	// express 인스턴스를 리턴한다.
	return app;
};
