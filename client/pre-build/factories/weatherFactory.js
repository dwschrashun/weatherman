app.factory("WeatherFactory", function ($http) {
	function parseWeather (weather) {
		var parsedWeather = [];
		var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		weather.list.forEach(function (weatherDay) {
			var dayWeather = {};
			var dayObj = new Date(weatherDay.dt * 1000);
			dayWeather.day = weekdays[dayObj.getDay(weatherDay.dt)];
			dayWeather.month = months[dayObj.getMonth(weatherDay.dt)];
			dayWeather.date = dayObj.getDate();
			dayWeather.temps = weatherDay.temp;
			parsedWeather.push(dayWeather);
		});
		return parsedWeather;

	}
	return {
		findWeather: function (city, countryCode) {
			var route = `api/weather?city=${city}&countryCode=${countryCode}`;
			return $http.get(route).then(function (response) {
				console.log("factory data:", response.data);
				return parseWeather(response.data);
			});
		}
	};
});