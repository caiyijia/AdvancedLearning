var studentDao = require("../dao/studentDao");

var path = new Map();

function getAllStudent(request, response) {
    studentDao.queryAllStudent(function(result) {
        response.writeHead(200);
        response.write(JSON.stringify(result));
        response.end();
    })
}

path.set("/getAllStudent", getAllStudent);

module.exports.path = path;
