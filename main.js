canvas=document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(150,143,40,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
