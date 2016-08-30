var application = angular.module('mainApp', []);

application.provider('date', function() {
	var greet;
	return {  //provider return
		setGreeting: function(value) {
			greet = value;
		},
		$get: function() {
			return {  //injector return
				showDate: function () { //show return
					var date = new Date();
					return greet + " Its " + date.getHours();
				},
				devshowDate: function () { //show return
					var date = new Date();
					return date.getHours();
				}
			}
		}
	}
});
//$route and $routeProvider
application.config(function(dateProvider) { // you can only pass providers in app.config
	var time = dateProvider.$get().devshowDate();
	if(time > 0 && time < 12) {
		dateProvider.setGreeting("Good morning!");

	} else if(time > 12 && time < 17) {
		dateProvider.setGreeting("Good day!");
	} else if(time > 17 && time <19) {
		dateProvider.setGreeting("Good evening!");
	} else {
		dateProvider.setGreeting("Good night!");
	}
});

application.controller('app', function($scope, date) {
	$scope.greetMessage = date.showDate();
})