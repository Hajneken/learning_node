const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

/* serve static files */
app.use("/assets", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  console.log("Bada bada bum");
});

app.listen(port, "127.0.0.1");
