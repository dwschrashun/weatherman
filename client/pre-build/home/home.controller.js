app.controller('HomeController', function($scope) {
	$scope.weather = {};
  	$scope.$on("newWeather", function (event, weather) {
  		$scope.weather = weather;
  	});
});