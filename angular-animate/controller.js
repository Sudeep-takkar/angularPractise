var app = angular.module('mainApp',['ngAnimate']);

app.controller('app', function($scope) {
	$scope.foods= ['Pizza', 'Burger', 'Butter chicken', 'Tandoori Roti'];
});