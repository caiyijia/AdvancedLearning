var studentService = require("../service/studentService");
var url = require('url')
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

function login(request, response) {
    var params = url.parse(requese.url, true).query;
    studentService.queryStudentByStuNum(params.stuNum, function(result) {
        console.log(result);
        var res = "";
        if(result.pwd == params.password) {
            res = "OK"
        }else {
            res = "Fail"
        }
        response.write(resArr.toString());
        response.end();
    })
}

path.set('/login', login);
module.exports.path = path;