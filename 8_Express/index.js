const express = require("express");
const app = express();

// environment variable of the process (global)
let port = process.env.PORT || 3000; // either specified port or 3000

// console.log(process.env);

app.get("/", function (req, res) {
  console.log("Home invoked");
});

/* automatic pattern matching when using : */
app.get("/person/:id", function (req, res) {
  res.send(
    `<html><head></head><body><h1>Person:${req.params.id}</h1></body></html>`
  );
});

app.listen(port);
