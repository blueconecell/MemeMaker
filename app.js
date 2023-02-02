const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
ctx.fill();

// ctx.rect(50, 50, 100, 100);
// ctx.fill();

// //분리시키기
// ctx.beginPath()

// //새로운 색 단독적용
// ctx.rect(250, 250, 100, 100);
// ctx.rect(450, 250, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();