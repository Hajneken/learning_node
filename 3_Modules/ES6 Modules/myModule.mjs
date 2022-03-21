function myLoggingFunction() {
  console.log("Function from ES modules!");
}

const notAvailable = function () {
  console.log(
    "This function is not exported and unavailable outside this module"
  );
};

export { myLoggingFunction };
