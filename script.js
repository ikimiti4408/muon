//basic_data
const ver = "0.2.1a";
const APP_URL = "https://ikimiti4408.github.io/noumm/"
const OFFLINE_URL = "https://github.com/ikimiti4408/noumm/tree/main/offline"
let online = true;
if (location.protocol == 'file:') online = false;

function addAttribute(source, qualifiedName, add_text) {
    let value = source.getAttribute(qualifiedName);
    value += add_text;
    source.setAttribute(qualifiedName, value);
}

function change_mode() {
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    if (b.paused) {
        b.play();
        c.textContent = "ON";
        c.style.background = 'lightgreen';
        c.style.color = 'black';
    } else {
        b.pause();
        c.textContent = "OFF";
        c.style.background = 'gray';
        c.style.color = 'white';
    }
}

function ver_write() {
    const vec = document.getElementsByClassName("ver");
    for (let i = 0; i < vec.length; i++) {
        vec[i].textContent = ver;
    }
}

function online_check() {
    const SOURCE = document.getElementsByClassName("online")[0];
    let url, text;
    if (online) {
        url = OFFLINE_URL;
        text = "オフライン版"
    } else {
        url = APP_URL;
        text = "オンライン版"
    }
    SOURCE.setAttribute("href", url);
    SOURCE.textContent = text;
}

window.onload = function () {
    ver_write();
    online_check();
};