const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200 + 30,200,20,100)
ctx.fillRect(400 - 30,200,20,100)
ctx.fillRect(280,200,60,200)

ctx.arc(310,150,30,0,2*Math.PI)
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "skyblue";
ctx.arc(300,140,5,0,2*Math.PI)
ctx.arc(320,140,5,1*Math.PI,2*Math.PI)
ctx.fill()