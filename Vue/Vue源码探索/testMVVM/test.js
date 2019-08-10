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
obj.x = 3
// console.log(obj.x);

var proxy = new Proxy(obj, {
    get: function(obj, x) {
        console.log('----')
        return Reflect.get(obj, 'x');
    }
})
console.log(proxy.x)