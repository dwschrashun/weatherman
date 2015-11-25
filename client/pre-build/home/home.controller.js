app.controller('HomeController', function($scope, getWeather, $stateParams) {
	$scope.weather = getWeather;
	$scope.city = $stateParams.city;
	$scope.country = $stateParams.country;
  	$scope.$on("newWeather", function (event, weather) {
  		$scope.weather = weather;
  	});
});