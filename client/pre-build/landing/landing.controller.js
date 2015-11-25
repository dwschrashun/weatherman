app.controller('LandingController', function($scope, CountryFactory, $state) {
	$scope.countries = CountryFactory.countries;
	$scope.country = "--Select Country--";
	$scope.goToHome = function (city, country) {
		console.log("gotohome", city, country);
		$state.go("home", {city: city, country: country});
	};
});