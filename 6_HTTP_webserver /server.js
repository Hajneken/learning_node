const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text-plain" });
    res.end("This is the end of the story\n");
  })
  .listen(3000, "127.0.0.1");

// listens on the localhost:1233
