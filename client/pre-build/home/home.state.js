app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/weather?city&country',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController',
        resolve: {
        	getWeather: function (WeatherFactory, $stateParams) {
        		return WeatherFactory.findWeather($stateParams.city, $stateParams.country)
        			.then(function (result) {
        				return result;
        			});
        	}
        }
    });
});