// IIFE(즉시 실행 함수 표현)을 모든 앵귤러 컴포넌트에 사용해
// 각 컴포넌트의 전역 변수 이름 충돌을 막는다
// 전역 변수 영역의 오염을 방지할 수 있고 다른 컴포넌트와의 코드들과 충돌을 피한다. 
(function() {
	// 자바스크립트 '엄격 모드' 적용
	'use strict';
	// crud 모듈의 controller를 구현한다.
	// controller는 어플리케이션의 비즈니스 로직을 구현하기 위해 모델 내 수행되는 기능들을 정의하는 곳
	angular.module('crud')

	// 컨트롤러는 아래와 같이 여러개를 다른 이름으로 정의 가능하다.
	.controller('crudController', ['$scope', 'crudService', CrudCtrl])
	.controller('crudCreateController', ['$scope', '$location', 'crudService', CrudCreateCtrl])
	.controller('crudViewController', ['$scope', 'crudService', '$routeParams', '$location', CrudViewCtrl])
	.controller('crudUpdateController', ['$scope', 'crudService', '$routeParams', '$location', CrudUpdateCtrl]);
	
	// 게시판 목록 컨트롤러 
	function CrudCtrl($scope, crudService) {
		// $scope를 통해 데이터 바인딩이 가능하다.
		$scope.selection = false;
		$scope.message = '';

		// 주입 받은 crudService를 통해 getCruds()를 호출한다.
		// getCruds()는 게시판 목록을 가져오는 메소드이다.
		crudService.getCruds().then( function(data) {
			if (data.result.length < 1) {
				$scope.message = '작성된 글이 없습니다.';
			} else {
				$scope.crudData = data.result;
				$scope.selection = true;
			}
		}, function(error) {
			// 통신 오류가 발생하였을 때 처리
			console.log('HTTP 통신 에러');
		});
	}

	// 게시판 작성 컨트롤러
	function CrudCreateCtrl($scope, $location, crudService) {
		// 작성 완료 버튼을 클릭하면 수행되는 메소드이다.
		$scope.saveCrud = function() {
			// 주입 받은 crudService를 통해 addCrud()를 호출한다.
			// addCrud()는 게시판 등록을 수행하는 메소드이다.
			crudService.addCrud($scope.crudData).then( function(data) {
				if(data.result == 'success') {
					// 작성 완료 후, 다시 목록으로 이동
					$location.path('/crud/list');
				}
			}, function(error) {
				// 통신 오류가 발생하였을 때 처리
				console.log('HTTP 통신 에러');
			});
		}
	}


	// 게시판 보기 컨트롤러
	function CrudViewCtrl($scope, crudService, $routeParams, $location) {
		// 주입 받은 crudService를 통해 getCrud()를 호출한다.
		// getCrud()는 특정 게시물의 데이터를 메소드이다.
			// $routeParams를 통해 url로 넘어온 파라미터값들을 얻을 수 있다.
		crudService.getCrud($routeParams.crud_id).then( function(data) {
			$scope.crudData = data;
		}, function(error) {
			// 통신 오류가 발생하였을 때 처리
			console.log('HTTP 통신 에러');
		});

		// 삭제 버튼을 클릭하면 수행되는 메소드이다.
		$scope.deleteCrud = function() {
			// 주입 받은 crudService를 통해 deleteCrud()를 호출한다.
			// deleteCrud()는 특정 게시물을 삭제 메소드이다.
			// $routeParams를 통해 url로 넘어온 파라미터값들을 얻을 수 있다.
			crudService.deleteCrud($routeParams.crud_id).then( function(data) {
				if(data.result == 'success') {
					// 삭제 완료 후, 다시 목록으로 이동
					$location.path('/crud/list');
				}
			}, function(error) {
				// 통신 오류가 발생하였을 때 처리
				console.log('HTTP 통신 에러');
			});
		}
	}


	// 게시판 업데이트 컨트롤러
	function CrudUpdateCtrl($scope, crudService, $routeParams, $location) {
		// 주입 받은 crudService를 통해 getCrud()를 호출한다.
		// getCrud()는 특정 게시물의 데이터를 메소드이다.
		crudService.getCrud($routeParams.crud_id).then( function(data) {
			$scope.crudData = data;
		}, function(error) {
			// 통신 오류가 발생하였을 때 처리
			console.log('HTTP 통신 에러');
		});


		$scope.updateCrud = function() {
			crudService.updateCrud($scope.crudData).then( function(data) {
				if(data.result == 'success') {
					// 수정 완료 후, 다시 게시물 보기로 이동
					$location.path('/crud/view/' + $routeParams.crud_id);
				}
			}, function(error) {
				// 통신 오류가 발생하였을 때 처리
				console.log('HTTP 통신 에러');
			});
		}
	}
})();