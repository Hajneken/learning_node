const http = require("http");
const fs = require("fs");

const server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    // create a stream i.e. using chunks of data instead of loading everything into memory
    fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  })
  .listen(1337, "127.0.0.1");
