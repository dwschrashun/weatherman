app.directive("navbar", function($rootScope, WeatherFactory){
	return {
		restrict: "E",
		templateUrl: "/pre-build/navbar/navbar.html",
		link: function (scope, element, attributes) {
			scope.getWeather = function (city, country) {
				console.log("nav getweather:", city, country);
				return WeatherFactory.findWeather(city, country)
					.then(function(results) {
						$rootScope.$broadcast("newWeather", {weather: results});
					});
			};
		}
	};
});