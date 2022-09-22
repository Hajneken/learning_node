/* grab a textfile */
const fs = require("fs");

/* __dirname is 1 of the parameters when using node modules  */
let synchronousRead = fs.readFileSync(__dirname + "/myfile.txt", "utf-8");

console.log(synchronousRead); // outputs => Hi, this message is from the text file.

/* 
    notice that this is asynchronous => we put there a callback 
    a.k.a. do this when you are done 
 */
let asyncRead = fs.readFile(__dirname + "/myfile.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Reading the contents of the file asynchronously");

console.log("done");