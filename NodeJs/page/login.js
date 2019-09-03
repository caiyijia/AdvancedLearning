window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/getData", true);
    // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("null");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            console.log(typeof xmlhttp.responseText);
        }
    }
}