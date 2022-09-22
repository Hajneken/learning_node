/* We work with streams because otherwise we could run out of memory */
const fs = require("fs");

const readable = fs.createReadStream(__dirname + "/myfile.txt", {
  encoding: "utf-8",
});

const writeable = fs.createWriteStream(__dirname + "/COPYmyfile.txt");

readable.on("data", (chunk) => {
    console.log("stream is open");
    writeable.write(chunk)
  });
