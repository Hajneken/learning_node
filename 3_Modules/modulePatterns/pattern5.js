// revealing module pattern: simulating prive/public access modifiers
// public is whatever is exported, private everything that is not

// not exported and accessible only inside module
var private = "Some private String that should not be accessed outside";

// exported and available outside module
function publicLogging() {
  console.log("Pattern 5: Module Revealing Pattern");
}

module.exports = {
    publicLogging : publicLogging
}