var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");

var exphbs = require("express-handlebars");


var app = express();
var port = 3000;


app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));//left over from movie schedulre chage to view and index?
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bthootu16",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burger: data });

  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.put("/", function(req, res) {

  connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [
    req.body.plan, req.body.id
  ], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.listen(port);
