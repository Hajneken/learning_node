const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let port = process.env.PORT || 3000;

/* 
REST architecture for creating, reading, updating and deleting person 
*/

app.get("/api/v1/person/:id", function (req, res) {
  // get the data about specific person
});

app.post("/api/v1/person", function (req, res) {
  // create a new person
});

app.delete("/api/v1/person/:id", function (req, res) {
  // create a new person
});
