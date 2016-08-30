var app = angular.module('mainApp',[]);

app.directive('myFirstDirective', function() {
	function linkFunction($scope, elem, attrs) {
		$scope.name = "Hello World!!";
		$scope.changeName = function(newName) {
			$scope.name = $scope.controllerProperty;
		}

	}
	return {
		restrict: 'EA',
		scope: {},
		link: linkFunction,
		template: '<span ng-click="changeName(\'Hey there\')">Current Text: {{ name }}</span>'
	}

}); // populated by compile function of the AJS

app.controller('app', function($scope) {
	$scope.controllerProperty = "This is a controller specific property";

});
//my-first-directive ---> myFirstDirective

//jQLite