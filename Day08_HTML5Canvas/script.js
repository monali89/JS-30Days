let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.strokeStyle = "blue";
ctx.lineWidth = "30";

let start = false;

function draw(e){
    if(e.type == "mouseup"){
        start = false;
    }
    else if(e.type == "mousedown"){
        start = true;
        ctx.moveTo(e.offsetX, e.offsetY);
    } 
    else if(start == true){
        //console.log(ctx.strokeStyle);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

window.addEventListener("mousedown", draw);
window.addEventListener("mouseup", draw);
window.addEventListener("mousemove", draw);



/*
CANVAS:
    One of the html element <canvas>
    Used to draw graphics on the fly via scripting (JS)
    Must have an "id" attribute so that the script can identify it
    Width and height is necessary to define the size
    One page can have multiple canvas elements
    All drawing must be done with script
    Need to use ctx.stroke() function finally to draw or apply the changes
    Gradients

var canvas = document.getElementById("myCanvas");
    find the element with id
var ctx = canvas.getContext("2d");
    this is a built in html object with properties and methods for drawing
ctx.fillStyle = "#FF0000";

REFERENCE: https://www.w3schools.com/graphics/canvas_reference.asp

1) Can Draw Text: Canvas can draw colorful text, with or without animation.
2) Can Draw Graphics: Canvas has great features for graphical data presentation with an imagery of graphs and charts.
3) Can be Animated: Canvas objects can move. Everything is possible: from simple bouncing balls to complex animations.
4) Can be Interactive: Canvas can respond to JavaScript events. Canvas can respond to any user action (key clicks, mouse clicks, button clicks, finger movement).
5) Can be Used in Games: Canvas' methods for animations, offer a lot of possibilities for HTML gaming applications.

*/