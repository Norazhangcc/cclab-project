/*
1. fix px manipulation
2. how to place the canvas centered?
3. buttons? trigger different functions in p5.js

4. upload images? "ASYNC in JS"
5. combine with already uploaded images
*/
let img;
let output;
let slider1;
let slider2;

function preload(){
  img = loadImage('assets/img.jpg');
}

function setup() {
  createCanvas(640, 640);
  background(255);

  output = createImage(img.width, img.height);

  slider1 = createSlider(0,255,70);
  slider2 = createSlider(0,255,35);
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
      let a = img.pixels[index + 3];

      output.pixels[index + 0] = r * slider2.value();
      output.pixels[index + 1] = g * 1.0;
      output.pixels[index + 2] = b * 1.0;
      output.pixels[index + 3] = a * slider1.value();
    }
  }
  output.updatePixels();

  image(output, 0, 0);
}
