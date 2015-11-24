var router = require('express').Router();
var http = require("http");
module.exports = router;


router.get("/", function (req, res, next) {
	console.log("get", req.query);
	if (req.query.city && req.query.country) {
		//var queryString = `q=${req.query.city},${req.query.country}&cnt=16`;
		//http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?${queryString}`);
		res.json(req.query);
	}
	else {
		res.send("Invalid location");
	}
});
