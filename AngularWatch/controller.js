var app = angular.module('mainApp', []);

app.controller('app', function($scope) {
	$scope.counter = -1;
	$scope.$watch('myText', function( newvalue, oldvalue) {
		//console.log('New Value: ' + newvalue);
		//console.log('Old Value: ' + oldvalue);
		$scope.counter++;
	})
})