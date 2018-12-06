
var ta
var btn

window.onload = function () {
    ta = document.getElementById("ta")
    btn = document.getElementById("btn")
    if(localStorage.text){
        ta.value = localStorage.text
    }
    btn.onclick = function () {
        localStorage.text = ta.value
        alert(ta.value)
    }
}