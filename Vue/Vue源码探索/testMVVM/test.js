var obj = {
    x: 1,
    y: 2,
    z: {
        a: 3,
        b: 4
    }
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

var newObj = deepClone(obj);
function proxyObj(obj, newObj) {
    for(let temp in obj) {
        if(temp instanceof Object){
            proxyObj(obj[temp], newObj[temp])
        }else {
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
}
proxyObj(obj, newObj)
obj.z.a = 3
// console.log(obj.x);

// var proxy = new Proxy(obj, {
//     get: function(obj, x) {
//         console.log('----')
//         return Reflect.get(obj, 'x');
//     }
// })
console.log(obj.z.b)