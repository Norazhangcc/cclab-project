console.log("Loaded!");

function setup(){
  createCanvas(400,500);
}

function draw(){
  background(random(255));
}


let newBtn = document.createElement('button');

newBtn.style.width = "50px";
newBtn.style.height = "50px";
newBtn.style.margin = "10px";

newBth.addEventListener("click",change)；
document.body.appendChild(newBtn);

function change(){
  let body = document.body;
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  body.style.backgroundColor =
  "rgb(" + r +","+ g+ ", "+ b +")";
}
