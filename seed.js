var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Promise = require("bluebird");
var City = Promise.promisifyAll(mongoose.model("City"));



var cities = require("./city.list.json");
console.log(cities);
