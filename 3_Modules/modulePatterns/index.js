// Pattern 1: reassiging empty object
var pattern1 = require("./pattern1");
pattern1();

// Pattern 2: explicitly setting an object
var pattern2 = require("./pattern2").prop;
pattern2();

// Pattern 3: function constructor in module
var pattern3 = require("./pattern3");
pattern3.log();

// Pattern 4: using exported function constructor
var Pattern4 = require("./pattern4");
var ptrn = new Pattern4();
ptrn.log();

// Pattern 5: Revealing Module Pattern
var pattern5 = require("./pattern5");
pattern5.publicLogging();
