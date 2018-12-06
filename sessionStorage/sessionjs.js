
var num =0
var txt;
var btn

window.onload = function () {
    txt = document.getElementById("txt")
    btn = document.getElementById("button")
    if(sessionStorage.num){
        num = sessionStorage.num
    }else {
        num = 0
    }

    btn.onclick = function () {
        num++
        sessionStorage.num = num
        showNum()
    }
}
function showNum() {
    txt.innerText = num
}