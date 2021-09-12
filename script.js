const canvas = document.getElementById("myCanva");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "#17171D"
const ctx = canvas.getContext("2d");

let paint = false;

const startDraw = () =>{
painting = true;
// draw(e);
}

const endDraw = () => {
painting = false;
ctx.beginPath();
}

const draw = e => {
  if(!painting) return;

  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.lineCap = "round";

//   ctx.lineTo(e.clientX, e.clientY);
ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY)
  ctx.stroke();
  ctx.beginPath()
  ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY)
}

// document.addEventListener("mousedown", startDraw);
// document.addEventListener("mouseup", endDraw);
// document.addEventListener("mousemove", draw);


document.addEventListener("touchstart", startDraw, false);
document.addEventListener("touchend", endDraw, false);
document.addEventListener("touchmove", draw, false);