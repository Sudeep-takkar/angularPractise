var app = angular.module('mainApp',[]);

app.filter('base', function() {
	// this func will be called at every digest cycle.
	var something = function(input, base) {
		
		var parsed = parseInt(input, 10);
		var based = parseInt(base, 10);

		if(isNaN(parsed) || isNaN(based) || based < 2 || based > 36) return 'Error!! Invalid Base';

		return parsed.toString(based);

	} 
	return something;
});

app.controller('app', function() {

});