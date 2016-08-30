var app = angular.module('mainApp',[]);

app.directive('myFirstDirective', function() {
	return {
		restrict: 'EA',
		scope: {
			name: '@',
			age: '=',
			func: '&'
		},
		template: ['<p>Value of name in directive: {{name}}</p>',
		'<p>Enter new "name": <input type="text" ng-model="name"></p>',
		'<p>Value of age in directive: {{age}}</p>',
		'<p>Enter new "age": <input type="number" ng-model="age"></p>',
		'<p><input type="button" value="alert from directive" ng-click="func()"></p>'].join('')
	}

}); // populated by compile function of the AJS

app.controller('app', function($scope) {
	$scope.name = "Codedamn";
	$scope.age = 100;
	$scope.alertTheName = function() {
		alert($scope.name);
	};
});


//my-first-directive ---> myFirstDirective

//jQLite

// @ - Text bind
// = - two way bind
// & - one way bind