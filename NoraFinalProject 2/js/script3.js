/*
1. fix px manipulation
2. how to place the canvas centered?
3. buttons? trigger different functions in p5.js
*/
let img;
//let output;

function preload(){
  img = loadImage('assets/img.jpg');
}

function setup() {
  createCanvas(640, 640);
  background(255);

  //output = createImage(img.width, img.height);

}

function draw() {
  background(255);

  img.loadPixels();
  let gridSize = 4;
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {

      let index = (x + y * img.width) * 4;
      let r = img.pixels[index + 0] * random(0.3, 3);
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3] * random(-10, 60);

      let avg = (r + g + b) / 3;
      let angle = map(avg, 0, 255, 0, TWO_PI);
      push();
      translate(x, y);
      rotate( angle );
      noStroke();
      fill(r, g, b, a);
      rect(0, 0, gridSize * random(0.9,1.6), gridSize * 1.9);
      pop();

    /*  output.pixels[index + 0] = r;
      output.pixels[index + 1] = g;
      output.pixels[index + 2] = b;
      output.pixels[index + 3] = a; */
    }
  }
}
