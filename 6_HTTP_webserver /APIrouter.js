const http = require("http");
const fs = require("fs");

/* easy API that sends JSON object */
http
  .createServer(function (req, res) {
    /* only allow for the following url */
    if (req.url === "/v1/api") {
      res.writeHead(200, { "Content-Type": "application/json" });

      let obj = {
        firstName: "Hynek",
        secondName: "Zemanec",
      };

      res.end(JSON.stringify(obj));
    }

    if (req.url === "/") {
        console.log("Nothing")
    }

    res.writeHead(404);
    res.end();
  })
  .listen(1337, "127.0.0.1");
