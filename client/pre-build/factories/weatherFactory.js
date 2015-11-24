app.factory("WeatherFactory", function ($http) {
	return {
		findWeather: function (city, country) {
			var route = `api/weather?city=${city}&country=${country}`;
			console.log("factory:", route);
			return $http.get(route).then(function (response) {
				console.log("factory data:", response.data);
				return response.data;
			});
		}
	};
});