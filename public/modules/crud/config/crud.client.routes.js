// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다. 
(function() {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';
	// crud 모듈의 config를 설정한다.
	angular.module('crud')
	// config 함수는 모듈의 설정에 주로 사용된다.
	// config 함수는 해당 모듈이 로드될 때, 인자로 받은 함수가 호출되며 실행된다. 
	.config(function($routeProvider, $locationProvider) {
		// routeProvider로 해당 모듈 영역의 라우팅을 설정한다.
		$routeProvider
			.when('/crud/create', {
				templateUrl: 'modules/crud/views/crud.client.create.html',
				controller: 'crudCreateController',
				controllerAs: 'crud'
			})
			.when('/crud/list', {
				templateUrl : 'modules/crud/views/crud.client.list.html',
				controller  : 'crudController',
				controllerAs: 'crud'
			})
			.when('/crud/view/:crud_id', {
				templateUrl : 'modules/crud/views/crud.client.view.html',
				controller  : 'crudViewController',
				controllerAs: 'crud'
			})
			.when('/crud/update/:crud_id', {
				templateUrl : 'modules/crud/views/crud.client.update.html',
				controller  : 'crudUpdateController',
				controllerAs: 'crud'
			})
			.otherwise({
				redirectTo: '/'
			});
		// 해당 모듈 부분에 HTML5Mode를 지정해주므로 URL에 '#'이 붙어 생기는 문제를 해결하게 된다.
		$locationProvider.html5Mode(true);
	});

})();
