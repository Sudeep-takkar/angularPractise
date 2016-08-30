var application = angular.module('mainApp', []);

application.service('random', function() {

	var num = Math.floor(Math.random()*10);

	this.generate = function() {  //this refer to random service.
		return num;
	};
});

application.controller('app', function($scope, random) {
	$scope.generateRandom = function() {
		$scope.randomNumber = random.generate();
		$scope.randomNumber2 = random.generate();
	}
});