var studentService = require("../service/studentService");

var path = new Map();

function getData(request, response) {
    studentService.queryAllStudent(function (result) {
        var resArr = [];
        for(var i = 0; i < result.length; i++) {
            resArr.push(result[i].name)
        }
        response.write(resArr.toString());
        response.end();
    })
}

path.set('/getData', getData);

// function getData2(request, response) {
    
// }

// path.set('/getData2', getData2);
module.exports.path = path;