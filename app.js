
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");


canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
let isPainting = false;
let isFilling = false;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown(){
    isPainting = true;
}
function onMouseUp(){
    isPainting = false;
}
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}
function onChangeColor(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;

}
function onColorClick(event) {
    const cv = event.target.dataset.color;
    ctx.strokeStyle = cv;
    ctx.fillStyle = cv;
    color.value = cv;
}
function onModeClick(event){
    if(isFilling){
        isFilling = false
        modeBtn.innerText = "Fill"
    }else{
        isFilling = true;
        modeBtn.innerText = "Draw"
    }
}
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,800,800);
    }
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change",onChangeColor)

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);











// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
// ];

// function onClick(event){
//     ctx.beginPath();
//     ctx.moveTo(0,0);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);