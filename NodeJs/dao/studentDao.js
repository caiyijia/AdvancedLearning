var dbutil = require('./dbutil');

function queryAllStudent(success) {
    var querySql = 'select * from student';
    var connection = dbutil.createConnection();
    
    connection.connect();
    connection.query(querySql, function (err, rslt) {
        if (err == null) {
            console.log(rslt);
            success(rslt)
        } else {
            console.log(err);
        }
    });
    connection.end();
}

function queryStudentByClassAndAge(classNum, age) {
    var querySql = 'select * from student where class = ? and age = ?; ';
    var queryParams = [classNum, age]
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, queryParams, function (err, rslt) {
        if (err === null) {
            console.log(rslt);
        } else {
            console.log(err);
        }
    });
    connection.end();
}

function queryStudentByStuNum(stuNum, success) {
    var querySql = 'select * from student where stu_num = ?; ';
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, stuNum, function (err, rslt) {
        if (err === null) {
            console.log(rslt);
            success(rslt);
        } else {
            console.log(err);
        }
    });
    connection.end();
}

module.exports = {
    "queryAllStudent": queryAllStudent,
    "queryStudentByClassAndAge": queryStudentByClassAndAge,
    "queryStudentByStuNum": queryStudentByStuNum
};