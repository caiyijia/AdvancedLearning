var express = require('express');
var cookie = require('cookie-parser');
var globalConfig = require("./config");

var loader = require("./loader");

var app = new express();

app.use(express.static(globalConfig["page_path"]));
app.use(cookie());

app.get("/api/*", function(request, response, next) {
    if(request.cookies.id) {
        next();
    }else {
        response.redirect("/login.html");
    }
});

app.get("/api/getAllStudent", loader.get("/api/getAllStudent"));

app.get("/api/addStudent", loader.get("/api/addStudent"));

app.listen(globalConfig["port"]);

