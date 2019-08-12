// import React from 'react';
// import ReactDOM from 'react-dom';
// import  { render } from 'react-dom';

// jsx => js + xml / html

// React.createElement('div',{id:'demo'},'yijia',react.creatElement('span', null,'handsome')
// 上面等于下面
// jsx => React.createElment(type, props, children...) => vNode 对象(描述当前元素) => 渲染到当前页面上
// let div = React.createElement('div',{id:'demo'},'yijia', React.createElement('span', null,'handsome'))


// render(div, document.getElementById('root'));

const React = {
    createElement (type, props, ...children) {
        return {
            type,
            props,
            children
        }
    }
}
let div = <div id="demo">caiyijia<span id="desc"> handsome</span></div>

console.log(div)

const render = (vNode, container) => {
    if(typeof vNode == 'string') {
        const text = document.createTextNode(vNode);
        return container.appendChild(text)
    }
    const {type, props, children} = vNode;
    const ele = document.createElement(type);
    for(let key in props) {
        // 去掉私有属性
        if(key.startsWith('__')){
            break
        }
        ele.setAttribute(key, props[key])
    }

    children.forEach(item => {
        render(item, ele);
    });
    container.appendChild(ele)
}

render(div, window.root)