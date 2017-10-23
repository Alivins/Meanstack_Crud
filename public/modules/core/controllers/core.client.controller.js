// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다. 
(function () {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';
	// core 모듈의 controller를 구현한다.
	// controller는 어플리케이션의 비즈니스 로직을 구현하기 위해 모델 내 수행되는 기능들을 정의하는 곳
	angular.module('core')
	// mainCotroller는 해당 컨트롤러의 이름이며 2번째 인자인 배열 안에 해당 컨트롤러의 의존성 주입
	// 배열의 마지막 인덱스에 해당 컨트롤러의 동작을 수행할 콜백함수를 정의한다.
	.controller('mainController', ['$scope', 'coreService', function($scope, coreService) {
		// 주입 받은 coreService를 이용해 httpExample() 메소드를 호출한다.
		// 결과값이 data로 들어오고 이를 alert로 출력한다.
		coreService.httpExample().then(function (data) {
			alert('$http 모듈 통신 테스트  ' + data);
    	}, function (error) {

    	});
	}]);
})();