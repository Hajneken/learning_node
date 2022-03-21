// import czech localization from json file 
var localizedGreet = require("./localization.json")

var greet = function(){
    console.log(localizedGreet.cs);
}

module.exports = greet;