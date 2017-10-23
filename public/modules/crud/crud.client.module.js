// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다.
(function() {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';

	// 새로운 모듈을 주 모듈에 등록한다.
	ApplicationConfiguration.registerModule('crud');
})();