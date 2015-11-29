app.filter("capitalize", function () {
	return function (input) {
		var strArr = input.split("");
		var newArr= [strArr[0].toUpperCase()];
		for (var i = 1; i < input.length; i++) {
			newArr.push(strArr[i-1] === " " ? strArr[i].toUpperCase() : strArr[i]);
		}
		return newArr.join("");
	};
});

app.filter("round", function () {
	return function (temp) {
		return Math.round(parseFloat(temp));
	};
});

app.controller('HomeController', function($scope, getWeather, $stateParams) {
	function showModal () {

	}
	if (getWeather.list) {
		$scope.weather = getWeather;
	}
	else showModal();
	$scope.city = $scope.weather.city;
	$scope.country = $scope.weather.country;
  	$scope.$on("newWeather", function (event, weather) {
  		if (weather) {
  			$scope.weather = weather;
  		}
  		else showModal();
  	});
  	$scope.sortBy = "index";
  	$scope.reverse = false;
  	$scope.changeSort = function (parameter) {
  		if (parameter === $scope.sortBy) $scope.reverse = !$scope.reverse;
  		$scope.sortBy = parameter;
  	};
});