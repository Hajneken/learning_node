var obj = {
  greet: "Hello",
};

console.log(obj.greet);

// -----------------------------
// using CUSTOM Emitter:
// DO NOT DO THAT IN PRODUCTION, USE ROBUST NODEJS EVENT EMITTER
// -----------------------------

var Emitter = require("./emitter");
const eventConfig = require("./config").events;

var emtr = new Emitter();

// remember: listeners are functions sitting in an array
emtr.on(eventConfig.GREET, function () {
  console.log("Greet listener has been emitted!");
});

emtr.on(eventConfig.GREET, function () {
  console.log("Totally different greet listener has been emitted!");
});

emtr.emit(eventConfig.GREET); // causes 2 different listeners to be executed
