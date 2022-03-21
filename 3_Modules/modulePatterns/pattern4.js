function FnConstructor() {
  this.toLog =
    "Pattern 4 (Function Constructor Exported): function FnConstructor(){}";
  this.log = function () {
    console.log(this.toLog);
  };
}
// passing the constructor i.e. the ability to create
module.exports = FnConstructor;
