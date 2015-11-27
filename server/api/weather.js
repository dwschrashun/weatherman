var router = require('express').Router();
var key = require("../../secrets.json").openWMKey;
var http = require("http");
module.exports = router;

router.get("/", function (req, res, next) {
	console.log("get", req.query);
	if (req.query.city && req.query.countryCode) {
		if(!req.query.countryCode) {
			req.query.countryCode = "";
		}
		var queryString = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${req.query.city},${req.query.countryCode}&cnt=16&type=like&units=imperial&APPID=${key}`;
		http.get(queryString, function (response) {
			var body = "";
			response.on("data", function (chunk) {
				body += chunk;
			});
			response.on("end", function () {
				var weatherObj = JSON.parse(body);
				weatherObj.originalCity = req.query.city;
				res.send("got a result", weatherObj);
			});
		});
	}
	else {
		res.send("Invalid location");
	}
});
