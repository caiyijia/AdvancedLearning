var express = require('express');

var globalConfig = require("./config");

var loader = require("./loader");

var app = new express();

app.use(express.static(globalConfig["page_path"]));

app.get("/getAllStudent", loader.get("/getAllStudent"));

app.get("/addStudent", loader.get("/addStudent"));

app.listen(globalConfig["port"]);

