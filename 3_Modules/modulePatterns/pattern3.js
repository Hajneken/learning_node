function FnConstructor() {
  this.toLog =
    "Pattern 3 (Function Constructor in module): function FnConstructor(){}";
  this.log = function () {
    console.log(this.toLog);
  };
}
// creating a new object
module.exports = new FnConstructor();
