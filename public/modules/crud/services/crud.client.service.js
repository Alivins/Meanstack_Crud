// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다.
(function() {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';
	// core 모듈의 factory를 구현한다.
	// 가장 일반적으로 사용하는 서비스 종류이다 
  	// 팩토리는 어떤 형태의 데이터타입이라도 리턴할 수 있다. 리턴된 오브젝트를 가지고 작업을 한다 
  	// 단, 리턴된 오브젝트의 값을 변경하면 해당 팩토리의 인스턴스를 사용하는 모든 곳에 변경값이 반영된다 
	angular.module('crud')
	// crudFactory 해당 서비스의 이름이며 2번째 인자인 배열 안에 해당 팩토리의 의존성 주입
	// 배열의 마지막 인덱스에 해당 팩토리의 동작을 수행할 콜백함수를 정의한다.
	.factory('crudFactory', ['$resource', function($resource) {
			// 주입 받은 $resource 메소드를 통해서 서버와의 restful api를 손쉽게 구현할 수 있다.
			// $resource에는 restful을 간편하게 사용할 수 있도록
			// $save, get, query, $update, $delete 등의 메소드를 지원한다.

	    	return $resource('api/crud/:crud_id', {
	        		crud_id: '@_id'
	    		}, {
		        		update: {
		            		method: 'PUT'
		        		},

		        		get: {
		        			isArray: false
		        		},

		        		query: {
		        			isArray: false
		        		}
	    		});

	}]);
})();