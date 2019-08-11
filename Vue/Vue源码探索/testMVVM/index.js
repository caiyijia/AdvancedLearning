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
    for (let temp in obj) {
        if (temp instanceof Object) {
            proxyObj(obj[temp], newObj[temp])
        } else {
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

function VNode(dom, type, value) {
    this.dom = dom;
    this.type = type;
    this.value = value;
    this.childNodes = [];
    this.appendChild = function (vnode) {
        if (!(vnode instanceof VNode)) {
            throw new Error('node is not instanceof VNode!')
        }
        this.childNodes.push(vnode)
    }
}

function buildVirtualNode(node) {
    var temp = new VNode(node, node.nodeType, node.nodeValue);
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType == 1) {
            let child = buildVirtualNode.call(this, node.childNodes[i]);
            temp.appendChild(child);
        } else if (node.childNodes[i].nodeType == 3) {
            // console.log(node.childNodes[i]);
            var arr = analysisTemplate(node.childNodes[i].nodeValue);
            for(let j = 0; arr && j < arr.length; j++){
                if(this.mapping.get(arr[j])){
                    let templateArr = this.mapping.get(arr[i]);
                    // console.log(templateArr)
                    templateArr.push(node.childNodes[i]);
                    this.mapping.set(arr[j], templateArr);
                }else {
                    this.mapping.set(arr[j], [node.childNodes[i]])
                }
            }
            let child = buildVirtualNode.call(this, node.childNodes[i]);
            temp.appendChild(child)
        } else {
            continue;
        }
    }
    return temp;
}

function MyMVVM(id, data) {
    this.id = id;
    this.data = data;
    this.el = document.getElementById(this.id);
    this.originTemplate = this.el.innerHTML;
    this.templates = analysisTemplate(this.el.innerHTML);
    this.cloneObj = deepClone(this.data);
    this.mapping = new Map();
    proxyObj.call(this, this.data, this.cloneObj);
    this.vNodeRoot = buildVirtualNode.call(this, this.el);
    render(this.el, this.originTemplate, this.templates, this.data);
}

window.onload = function () {

}