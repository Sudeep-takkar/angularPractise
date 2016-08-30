var application = angular.module('mainApp', []);

application.service('fromService', function() {
	this.message = "This is from Service!!";
});

application.factory('fromFactory', function() {
	var factory = {};
	factory.message = "This is from Factory!!";
	return factory;
});

application.provider('sss', function() {
	var m1 = "This is from Provider!!";
	return {
		setAName: function(name) {
			m1 += " " + name;
		},
		$get: function() {
			return {
				message: m1
			}
		}
	}
});

application.config(function(sssProvider) {
	sssProvider.setAName("Sudeep");
});

application.controller('app', function($scope,fromService, sss, fromFactory) {
	$scope.greetMessage = [fromService.message, sss.message, fromFactory.message]
});