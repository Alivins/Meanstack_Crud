'use strict';

// AngularJS Application의 환경 구성을 초기화
var ApplicationConfiguration = (function() {

	// 주 애플리케이션의 모듈 이름을 포함한 변수를 생성
	var applicationModuleName = 'meancrud';

	// 주 어플리케이션 모듈에 주입될 의존성을 배열로 생성
	var applicationModuleVendorDependencies = ['ngResource', 'ngRoute'];

	// 새로운 모듈이 생겼을 때 추가하는 메소드
	var registerModule = function(moduleName, dependencies) {
		// 새로운 모듈을 만든다
		angular.module(moduleName, dependencies || []);

		// 새로운 모듈을 AngularJS 주 모듈 구성에 추가한다.
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();