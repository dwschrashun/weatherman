app.factory("WeatherFactory", function ($http, CountryFactory) {
	function parseWeather (weather) {
		console.log("raw weather", weather);
		var parsedWeather = {
			list: []
		};
		var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		weather.list.forEach(function (weatherDay, index) {
			var dayWeather = {};
			var dayObj = new Date(weatherDay.dt * 1000);
			dayWeather.day = weekdays[dayObj.getDay(weatherDay.dt)];
			dayWeather.month = months[dayObj.getMonth(weatherDay.dt)];
			dayWeather.date = dayObj.getDate();
			dayWeather.morn = weatherDay.temp.morn;
			dayWeather.noon = weatherDay.temp.day;
			dayWeather.eve = weatherDay.temp.eve;
			dayWeather.night = weatherDay.temp.night;
			dayWeather.index = index;
			parsedWeather.list.push(dayWeather);
		});
		parsedWeather.city = weather.city.name;
		parsedWeather.originalCity = weather.originalCity;
		parsedWeather.country = CountryFactory.mapCountry(weather.city.country);
		return parsedWeather;
	}
	
	function findWeather (city, countryCode) {
		var route = `api/weather?city=${city}&countryCode=${countryCode}`;
		return $http.get(route).then(function (response) {
			console.log("factory data:", response.data);
			if (response.data.list) {
				return parseWeather(response.data);
			}
			else return null;
		});
	}
	return {
		findWeather: findWeather,
		parseWeather: parseWeather
	};
});