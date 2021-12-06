let sliderBgR;
let sliderBgG;
let sliderBgB;

function setup() {
  createCanvas(400, 500);

  sliderBgR = document.getElementById('bg-r');
  sliderBgG = document.getElementById('bg-g');
  sliderBgB = document.getElementById('bg-b');
}

function draw() {
  let r = sliderBgR.value;
  let g = sliderBgG.value;
  let b = sliderBgB.value;
  background(r, g, b);
  
  //
}
