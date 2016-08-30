var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'login.html'
		 //ajax request
	})
	.when('/dashboard', {
		resolve: {
			"check" : function($location, $rootScope) {
				if(!$rootScope.loggedIn) {
					$location.path('/');
				}
			}
		},
		templateUrl:'hello.html'
	})

	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope, $location, $rootScope) {
	$scope.submit = function() {
		console.log($scope.username);
		console.log($scope.password);
		if($scope.username == 'admin' && $scope.password == 'admin') {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}else {
			alert('Wrong login credentials!!!');
		}
	}
})