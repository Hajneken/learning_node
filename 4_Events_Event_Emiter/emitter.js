function Emitter() {
  this.events = {
    prop: [],
  };
}

Emitter.prototype.on = function (type, listener) {
  // if this property does not exist make a new arry
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {});
  }
};
