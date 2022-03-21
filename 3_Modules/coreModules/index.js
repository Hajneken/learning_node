// util.js
var util = require("util");

var name = "Hynek";

var greeting = util.format("Hello, %s!", name);

console.log(greeting);
