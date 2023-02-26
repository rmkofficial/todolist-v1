const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();

  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const day = date.toLocaleString("en-US", options);
  console.log(day);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
