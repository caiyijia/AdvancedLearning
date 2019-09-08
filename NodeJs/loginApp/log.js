var fs = require('fs');
var gloabalConfig = require('./config');
var fileName = gloabalConfig.log_path + gloabalConfig.log_name;

function log(data) {
    // console.log(data);
    fs.appendFile(fileName, data + '\r\n', {flag: 'a'}, function () {});

}

module.exports = log;