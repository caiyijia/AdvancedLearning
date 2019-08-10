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

function MyMVVM(id, data) {
    this.id = id;
    this.data = data;
    this.el = document.getElementById(this.id);
    this.originTemplate = this.el.innerHTML;
    this.templates = analysisTemplate(this.el.innerHTML);
    render(this.el, this.originTemplate, this.templates, this.data)
}

window.onload = function () {

}