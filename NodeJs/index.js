// console.log(arguments)
// arguments[0] == exports
// arguments[1] == require
// arguments[2] == Module
// arguments[3] == __filename
// arguments[0] == __dirname

var http = require("http");
var url = require("url")
var fs = require("fs")
var globalConfig = require('./config')

http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    var isStatic = isStaticsRequest(pathName);
    if (isStatic) {
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

    } else {
        
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