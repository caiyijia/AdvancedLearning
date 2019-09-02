// console.log(arguments)
// arguments[0] == exports
// arguments[1] == require
// arguments[2] == Module
// arguments[3] == __filename
// arguments[0] == __dirname

var http = require("http");
var url = require("url")
var fs = require("fs")
var globalConfig = require('./config');
// var login = require('./web/loginController')
var loader = require('./loader');

http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    var isStatic = isStaticsRequest(pathName);
    if (isStatic) { //请求的静态文件
        try {
            var data = fs.readFileSync(globalConfig['page_path'] + pathName);
            response.writeHead(200);
            response.write(data);
            response.end();
        } catch (e) {
            response.writeHead(404);
            response.write("<html><body><h1>404 NOTFOUND</h1></body></html>");
            response.end();
        }

    } else { // 请求的动态数据
        if (loader.get(pathName) !== null) {
            try {
                loader.get(pathName)(request, response);
            } catch (e) {
                response.writeHead(500);
                response.write("<html><body><h1>500 Bad Server</h1></body></html>");
                response.end();
            }
        } else {
            response.writeHead(404);
            response.write("<html><body><h1>404 NOTFOUND</h1></body></html>");
            response.end();
        }
    }

}).listen(globalConfig['port'])

function isStaticsRequest(pathName) {
    for (var i = 0; i < globalConfig.static_file_type.length; i++) {
        var temp = globalConfig.static_file_type[i]
        if (pathName.indexOf(temp) == pathName.length - temp.length) {
            return true;
        }
    }
    return false;
}