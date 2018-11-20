var mycanvas, context;
window.onload = function () {
    creatCanvas()
   // drawRect()
    drawImage()
}

function creatCanvas() {
    document.body.innerHTML = '<canvas id="mycanvas" width="600px" height="600px"></canvas>'
    mycanvas = document.getElementById("mycanvas")
    context = mycanvas.getContext("2d")
}

function drawRect() {


    // context.fillStyle = '#ff00ff'
    // context.translate(100,100)
    // context.scale(2,1)
    //  context.fillRect(100, 100, 300, 300)

//旋转
    var x = 100,
        y = 100,
        width = 150,
        height = 150,
        angle = 90,
        rectCenterPoint = {x: x + width / 2, y: y + height / 2}; // 矩形中心点

// 旋转前(红色矩形)
    context.fillStyle = '#f00';
    context.fillRect(x, y, width, height);

// 旋转后(绿色矩形)
    context.translate(rectCenterPoint.x, rectCenterPoint.y);
    context.rotate(angle);
    context.translate(-rectCenterPoint.x, -rectCenterPoint.y);
    context.fillStyle = '#690';
    context.fillRect(x, y, width, height);
}
function drawImage() {
    var img = new Image()
    img.onload=function () {
        context.drawImage(img,0,0)
    }
    img.src="95.jpg"
}