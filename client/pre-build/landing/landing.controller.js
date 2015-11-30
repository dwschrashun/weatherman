app.controller('LandingController', function($scope, CountryFactory, $state) {
	$scope.loading = false;
	$scope.countries = CountryFactory.countries;
	$scope.country = "--Select Country--";
	$scope.goToHome = function (city, country) {
		$scope.loading = true;
		$state.go("home", {city: city, country: country});
	};
});