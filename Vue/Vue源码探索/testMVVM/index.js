function analysisTemplate(html) {
    return html.match(/{{[A-z]+[A-z0-9]*}}/g);
}

function dropBorder(text) {
    return text.substring(2, text.length - 2);
}

function render(el, originTemplate, templates, data) {
    let result = originTemplate;
    for (let i = 0; i < templates.length; i++) {
        let tempValue = data[dropBorder(templates[i])]
        if (tempValue) {
            result = result.replace(templates[i], tempValue);
        }
    }
    // console.log(result)
    el.innerHTML = result;
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function proxyObj(obj, newObj) {
    var self = this;
    for(let temp in obj) {
        if(temp instanceof Object){
            proxyObj(obj[temp], newObj[temp])
        }else {
            Object.defineProperty(obj, temp, {
                get: function () {
                    // console.log('---');
                    return newObj[temp];
                },
                set: function (value) {
                    console.log('+++');
                    newObj[temp] = value;
                    // 此时的this是被调用时的data数据对象
                    // console.log(this)
                    render(self.el, self.originTemplate, self.templates, self.data)
                }
            })
        }
        
    }
}


function MyMVVM(id, data) {
    this.id = id;
    this.data = data;
    this.el = document.getElementById(this.id);
    this.originTemplate = this.el.innerHTML;
    this.templates = analysisTemplate(this.el.innerHTML);
    this.cloneObj = deepClone(this.data);
    proxyObj.call(this, this.data, this.cloneObj);
    render(this.el, this.originTemplate, this.templates, this.data)
}

window.onload = function () {

}