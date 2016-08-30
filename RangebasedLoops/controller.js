var app = angular.module('mainApp', []);

app.controller('app', function($scope, $http) {
	var range = new Array(100);
	$scope.range = range;
});