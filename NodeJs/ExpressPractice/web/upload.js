var path = new Map();
function upload(request, response){
    response.end("finish");
    console.log(request.file.mainType);
    console.log(request.file.orginalname);
    console.log(request.file.size);
    console.log(request.file.path);
}

path.set("/upload", upload);

module.exports.path = path;