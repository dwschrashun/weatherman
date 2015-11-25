app.directive("navbar", function($stateParams, $rootScope, WeatherFactory, CountryFactory, $state){
	return {
		restrict: "E",
		templateUrl: "/pre-build/navbar/navbar.html",
		link: function (scope, element, attributes) {
			scope.getWeather = function (city, country) {
				return WeatherFactory.findWeather(city, country.code)
					.then(function(results) {
						$rootScope.$broadcast("newWeather", {weather: results});
					});
			};
			scope.countries = CountryFactory.countries;
			scope.country = $stateParams.country;
			scope.city = $stateParams.city;
		}
	};
});