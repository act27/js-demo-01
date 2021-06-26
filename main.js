
let div1 = document.createElement('div');
document.body.appendChild(div1);

div1.className = 'demo';

var x = false;
var lastX,lastY;

div1.onmousedown = function(p){
    x = true;
    lastX = p.pageX;
    lastY = p.pageY;
}

document.body.onmousemove = function(e){
    if(x === true){
        var left = parseInt(div1.style.left) || 0;
        var top = parseInt(div1.style.top) || 0;
        var deltaX = e.pageX - lastX;
        var deltaY = e.pageY - lastY;
        div1.style.left = left + deltaX + 'px';
        div1.style.top = top + deltaY + 'px';

        lastX = e.pageX;
        lastY = e.pageY;
    }
}

div1.onmouseup = function(){
    x = false;
}


































