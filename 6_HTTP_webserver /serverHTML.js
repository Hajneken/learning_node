const http = require("http");
const fs = require("fs");


http
  .createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    var html = fs.readFileSync(__dirname + "/index.htm", "utf8");

    let message = "Hynek is a Web Developer that likes to tinker with data.";

    html.replace("{message}", message);

    // this is stream
    res.read(html);
  })
  .listen(1337, "127.0.0.1");
