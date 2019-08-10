var obj = {
    x: 1,
    y: 2
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}



function proxyObj(obj) {
    let newObj = deepClone(obj);
    for(let temp in obj) {
        Object.defineProperty(obj, temp, {
            get: function () {
                console.log('---');
                return newObj[temp];
            },
            set: function (value) {
                console.log('+++');
                newObj[temp] = value;
            }
        })
    }
}
proxyObj(obj)

console.log(obj.x);