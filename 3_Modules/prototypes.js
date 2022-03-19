// function constructor starts with capital letter
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// prototype of Person has newly assigned function which all Persons can now use
Person.prototype.greet = function () {
  console.log(`Prototype of ${this.firstName} Person says hi!`);
};

var hynek = new Person("Hynek", "Zemanec");
hynek.greet(); // Prototype of Hynek Person says hi!

var gyros = new Person("Gyros", "ThePug");
gyros.greet(); // Prototype of Gyros Person says hi!

// absolutely do not use this ever BUT you can check the prototype
console.log("Prototype of Hynek is ", hynek.__proto__);

console.log(
  "Hynek and Gyros have the same prototype is:",
  hynek.__proto__ === gyros.__proto__
);
