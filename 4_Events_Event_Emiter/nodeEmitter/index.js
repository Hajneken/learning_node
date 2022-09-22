import { EventEmitter } from "node:events";

let emitter = new EventEmitter();

emitter.on("Test", () => {
  console.log("test has been called");
});

console.log("emitter.eventNames() :>> ", emitter.eventNames());

emitter.emit("Test");
