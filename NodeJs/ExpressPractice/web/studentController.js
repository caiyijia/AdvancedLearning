var studentDao = require("../dao/studentDao");
var url = require("url");
var path = new Map();

function getAllStudent(request, response) {
    studentDao.queryAllStudent(function(result) {
        response.writeHead(200);
        response.write(JSON.stringify(result));
        response.end();
    })
}

path.set("/api/getAllStudent", getAllStudent);

function addStudent(request, response) {
    var params = url.parse(request.url, true).query;

    studentDao.insertStudent(params.stuNum, params.name, params.stuClass, params.age, params.pwd, function(result) {
        response.writeHead(200, {"Content-Type": "text/html: charset=utf-8"});
        response.write("添加成功");
        response.end();
    })
}

path.set("/api/addStudent", addStudent);

module.exports.path = path;
