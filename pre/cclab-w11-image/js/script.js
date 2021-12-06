let img;
let circleImg;

function preload() {
  // async
  img = loadImage("asset/colorful.jpg");
  circleImg = loadImage("asset/sprite.png");
}

function setup() {
  createCanvas(400, 500);
  background(0);
}

function keyPressed() {
  if (key == " ") {
    saveCanvas("mySketch", "png");
  }
}


function draw() {
  //background(0);

  push();
  //blendMode(ADD);
  tint(200, 120, 10, 30);
  let dia = map(sin(frameCount * 0.03), -1, 1, 50, 100);
  imageMode(CENTER);
  image(circleImg, mouseX, mouseY, dia, dia);
  pop();


  /*
  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.05);
  imageMode(CENTER);
  image(img, 0,0, 100, 100); //(img, x, y, (w), (h));
  pop();
  */

  //tint(255, 255, 255, 50);
  //image(img, 0, 0, width, height);
  //filter(BLUR, 6);
  //filter(GRAY);
  //filter(INVERT);
  //filter(THRESHOLD, 0.5);
}
