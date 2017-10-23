'use strict';

// 주 모듈을 정의하고 의존성을 주입한다.
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// 검색엔진 최적화를 위한 해시뱅 사용
// 검색 엔진 웹 로봇은 앱이 새로운 경로를 표시하기 위해 AJAX를 사용하고 있으며,
// 페이지를 떠나기 앞서 결과를 기다릴 필요가 있다는 사실을 알리게 된다.
// 단일 페이지 애플리케이션이라고 표시하기 위해 해시뱅(Hashbang)이라는 라우팅 정책을 사용한다.
// 해시뱅은 해시 기호 바로 뒤에 느낌표를 추가하는 방식으로 구현한다.
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	// locationProvider 서비스를 사용해 해시뱅을 구성한다.
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

// jqLite 기능을 사용해 document-ready 이벤트에 함수를 결합한다.
// 이 함수에서 angular.bootstrap() 메소드를 사용해 앞서 정의한 주 애플리케이션 모듈로 
// 새로운 AngularJS 애플리케이션을 시작하게 만든다.
angular.element(document).ready(function() {
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});