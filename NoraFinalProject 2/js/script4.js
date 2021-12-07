let video;
let videosize = 30;
let slider;
let rendereffect = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width / videosize, height / videosize);
  video.hide();

  for (let i = 0; i < 200; i++){
    rendereffect[i] = new Rendereffect (random(width), random(height));
  }

  slider = createSlider(0, 255, 70);
  background(220);
}

function draw() {

  push();
  translate(video.width, 0);
  scale(-1, 1); // flip the camera video
  image(video, 0, 0);
  pop();

  video.loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;

      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      if (x < video.width) {
        video.pixels[index + 0] = r * 5; // R
        video.pixels[index + 1] = g * 10; // G
        video.pixels[index + 2] = b * 18; // B
        video.pixels[index + 3] = slider.value(); //A
      }
    }
    video.updatePixels();
  }

  for (let i = 0; i < rendereffect.length; i++) {
    rendereffect[i].update();
    rendereffect[i].show();
  }
}

function Rendereffect(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(15, 35);

  this.update = function () {
    this.x += random(-20, 20);
    this.y += random(-20, 20);
  };

  this.show = function () {
    let videox = floor(this.x / videosize);
    let videoy = floor(this.y / videosize);
    let videocolor = video.get(videox, videoy);
    //console.log(videocolor);
    noStroke();
    fill(videocolor[0], videocolor[1], videocolor[2], slider.value());
    circle(this.x, this.y, this.r)
  };
}
