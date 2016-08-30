var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http) {
	$http.get('http://localhost/eazevent-angular-frontend/AJS2/database.json')
	.success(function(response) {
		$scope.persons = response.records;
	});
});