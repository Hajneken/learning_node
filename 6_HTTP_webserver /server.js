const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text-plain" });
    res.end("This is the end of the story\n");
  })
  .listen(1233, "127.0.0.1");
