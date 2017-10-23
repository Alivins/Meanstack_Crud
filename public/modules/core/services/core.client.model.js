// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다.
(function() {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';
	// core 모듈의 service를 구현한다.
	// service는 Factory service와 유사사지만 생성자명칭(== 서비스명칭)을 넘기면 자동으로 new를 통하여 생성된다 
    // 즉, Factory 처럼 오브젝트의 리턴이 필요없다 
  	// 주의 할 것은 factory안에서 또는 service사용시 new을 여러번 하여도 반드시 한번만 인스턴스화 한다
    // 즉, Singleton 패턴으로 객체 하나만이 생성된다 
	angular.module('core')
	// coreService는 해당 서비스의 이름이며 2번째 인자인 배열 안에 해당 서비스의 의존성 주입
	// 배열의 마지막 인덱스에 해당 서비스의 동작을 수행할 콜백함수를 정의한다.
	.service('coreService', ['coreFactory', '$q', function(coreFactory, $q) {
		this.httpExample = httpExample;

		function httpExample() {
			// $q 모듈을 이용해 promise를 구현하였다.
			var deferred = $q.defer();
			// then 함수 안에 성공했을 때 콜백 함수, 실패했을 때 콜백 함수로 나뉜다.
			coreFactory.httpTest().then(function(result) {
				deferred.resolve(result.result);
			}, function(error) {
				deferred.reject({ result: false });
			});

			return deferred.promise;
		}
	}]);
})();