// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다.
(function () {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';
	// core 모듈의 factory를 구현한다.
	// 가장 일반적으로 사용하는 서비스 종류이다 
  	// 팩토리는 어떤 형태의 데이터타입이라도 리턴할 수 있다. 리턴된 오브젝트를 가지고 작업을 한다 
  	// 단, 리턴된 오브젝트의 값을 변경하면 해당 팩토리의 인스턴스를 사용하는 모든 곳에 변경값이 반영된다 
	angular.module('core').
	// coreFactory 해당 서비스의 이름이며 2번째 인자인 배열 안에 해당 팩토리의 의존성 주입
	// 배열의 마지막 인덱스에 해당 팩토리의 동작을 수행할 콜백함수를 정의한다.
	factory('coreFactory', ['$http', '$q', function($http, $q) {

		// AngularJS에서 AJAX 통신을 지원하는 $http 모듈
		// AngularJS에서 Promise 패턴을 구현할 수 있도록 해주는 $q 모듈

		// http 서비스 구현을 위한 객체 생성
		var mFactory = {};

		// http 통신을 위한 httpTest 함수
		mFactory.httpTest = function() {
			// $q 모듈을 이용해 promise를 구현하였다.
			var deferred = $q.defer();

			$http.get('/api/core')
				.success(function(data, status, headers, config) {
					deferred.resolve(data);
				})
				.error(function(data, status, headers, config) {
					deferred.reject({ result: false });
				});

			return deferred.promise;
		}

		// 객체 리턴
		return mFactory;
	}]);
})();