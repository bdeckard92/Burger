
/*var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }, i can't open chrome annd I can't get on slack on  explorer...
 
};*/

var orm = require("../config/orm.js");  var burger = {  all: function(cb) {    orm.all("burgers", function(res) {      cb(res);    });  },  create: function(name, cb) {    orm.create("burgers", [      "burger_name", "devoured"    ], [      name, false    ], cb);  },  update: function(id, cb) {    var condition = "id=" + id;    orm.update("burgers", {      devoured: true    }, condition, cb);  } };  module.exports = burger;



