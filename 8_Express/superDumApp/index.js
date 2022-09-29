// const bodyParser = require("body-parser");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let port = process.env.PORT || 3000;

/* set templating engine */
app.set("view engine", "ejs");

/* getting data from query string */
app.get("/api/:id", function (req, res) {
  res.render(__dirname + "/views/person", {
    ID: req.params.id,
    QueryString: req.query.qstr,
  });
});

app.get("/form", function (req, res) {
  res.render(__dirname + "/views/form");
});

/* getting data from a form */
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post("/form", urlEncodedParser, function (req, res) {
  res.send("Thanks for submitting!");
  console.log("first: ", req.body.first);
  console.log("second: ", req.body.last);
});

const jsonParser = bodyParser.json();

app.get("/jsonApi", function (req, res) {
  res.render(__dirname + "/views/jsonForm");
});

app.post("/jsonApi", jsonParser, function (req, res) {
  res.send("Thank you for submitting your JSON data!");
  console.log(req.body)
  console.log("req.body.first :>> ", req.body.first);
  console.log("req.body.last :>> ", req.body.last);
});

/* register the server at the port */
app.listen(port);
