function Emitter() {
  this.events = {
    prop: [],
  };
}

// using on suggests an event listener
Emitter.prototype.on = function (type, listener) {
  // if this property does not exist make a new arry
  this.events[type] = this.events[type] || [];
  // push listener a.k.a. a function executing when it happens
  this.events[type].push(listener);
};

// emit a.k.a. carry out operation since something happened
Emitter.prototype.emit = function (type) {
  // look if such type of an event exists
  if (this.events[type]) {
    // execute every listener function that is associated
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

module.exports = Emitter;
