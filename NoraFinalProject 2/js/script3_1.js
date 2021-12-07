/*
1. fix px manipulation
2. how to place the canvas centered?
3. buttons? trigger different functions in p5.js

4. upload images? "ASYNC in JS"
5. combine with already uploaded images
*/



let img;
let output;

function preload(){
  img = loadImage('assets/img.jpg');
}

function setup() {
  createCanvas(640, 640);
  background(255);

  output = createImage(img.width, img.height);
}

function draw() {
  background(255);

  img.loadPixels();
  output.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

      let index = (x + y * img.width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      output.pixels[index + 0] = r * 1.0;
      output.pixels[index + 1] = g * 1.0;
      output.pixels[index + 2] = b * 1.0;
      output.pixels[index + 3] = 255;
    }
  }
  output.updatePixels();

  image(output, 0, 0);
}
