var x = 1

function foo(x, y = function () {
    x = 2
}) {
    var x = 3
    y()
    console.log(x)

}

function foo1(x,y=function () {
    x=2
}){
    x=3
    y()
    console.log(x)
}
function foo2(y = function () {
    x=2
}){
    y()
    console.log(x)
}
function foo3(y = function () {
    x=2
}){
    x=5
    y()
    console.log(x)
}
function foo4(y = function () {
    x=2
}){
    y()
    x=5
    console.log(x)
}
window.onload = function(){
    foo()
    foo1()
    foo2()
    foo3()
    foo4()
}

