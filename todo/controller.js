var appX = angular.module('mainApp',[]);

appX.controller('app', function($scope) {
	$scope.tasks = [];

	var taskData = localStorage['tasksList'];

	if(taskData !== undefined) {

		$scope.tasks = JSON.parse(taskData);
		console.log($scope.tasks[0].taskStatus);
	}

	$scope.searchEnter = function() {
		if(event.which == 13 && $scope.task != "") {
			$scope.addTask();
		}
	};
	$scope.addTask = function() {
		$scope.tasks.push({'taskMessage' : $scope.task, 'taskStatus' : false});
		$scope.task = '';
		$scope.updateLocalStorage();
	};

	$scope.contentEdit = function(x) {
		for(i=0; i<$scope.tasks.length; i++) {
			if($scope.tasks[i].taskMessage == x) {
				$scope.tasks[i].taskMessage = event.target.innerText;
			}
		}
		$scope.updateLocalStorage();
		event.target.contentEditable = event.target.contentEditable == 'false' ? 'true' : 'false';
	};
	$scope.enterAgain = function(msg) {
		if(event.which == 13 && msg != "") {
			$scope.contentEdit(msg);
		}
	};
	$scope.updateLocalStorage = function() {
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
	};
});