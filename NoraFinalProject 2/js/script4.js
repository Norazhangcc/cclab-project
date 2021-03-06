let video;
let videosize = 30;
let slider;
let rendereffect = [];
let button;
let snapshots = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width / videosize, height / videosize);
  video.hide();

  for (let i = 0; i < 200; i++){
    rendereffect[i] = new Rendereffect (random(width), random(height));
  }

  slider = createSlider(0, 80, 45);
  background(220);


 button = createButton('snap');
 button.mousePressed(takesnap);
}

function takesnap(){
  //image(video, 0, 0);
  snapshots.push(video.get());
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
        video.pixels[index + 0] = r * 1.2; // R
        video.pixels[index + 1] = g * 1.3; // G
        video.pixels[index + 2] = b * 3; // B
        video.pixels[index + 3] = slider.value(); //A
      }
    }
    video.updatePixels();
  }

  for (let i = 0; i < rendereffect.length; i++) {
    rendereffect[i].update();
    rendereffect[i].show();
  }


  let w = 80;
 let h = 60;
 let x = 0;
 let y = 0;

 for(let i = 0; i <  snapshots.length; i++){
   tint(255,50);
   image(snapshots[i], x, y, w, h);
   x = x + w;
   if (x > width){
       x = 0;
       y =y + h;
       }
 }
}

function Rendereffect(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(15, 35);

  this.update = function () {
    this.x += random(-25, 25);
    this.y += random(-25, 25);
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
