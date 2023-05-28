var express = require("express");
var config = require("config");
var bodyParse = require("body-parser");
var engines = require('consolidate');

var app = express();

app.use(bodyParse.json());

app.set("views", __dirname + "/apps/views");
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');
app.set("view engine", "ejs");

app.use(bodyParse.urlencoded({extended: true}));

app.use("/static", express.static(__dirname + "/public"));
app.use("/vendor", express.static(__dirname + "/vendor"));

// var controllers = require(__dirname + "/apps/controller");
// app.use(controllers);
app.use(require(__dirname + "/apps/controller"));

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port, host, function(){
    console.log("Server is running on port", port);
})