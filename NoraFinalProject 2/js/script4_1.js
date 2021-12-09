let video;
let vScale = 16;
let particles = [];
let slider;
let button;
let snapshots = [];


function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();

  for (let i = 0; i < 100; i++) {
     particles[i] = new Particle (random(width),random(height));
  }
  slider = createSlider(0, 255, 127);
  background(51);


   button = createButton('snap');
   button.mousePressed(takesnap);
}


function takesnap(){
  //image(video, 0, 0);
  snapshots.push(video.get());
}


function draw() {
  //background(51);
  video.loadPixels();

  for(let i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }


    let w = 80;
   let h = 60;
   let x = 0;
   let y = 0;

   for(let i = 0; i <  snapshots.length; i++){
     tint(255,100);
     image(snapshots[i], x, y, w, h);
     x = x + w;
     if (x > width){
         x = 0;
         y =y + h;
         }

   }
}

function Particle(x,y){

  this.x = x;
  this.y = y;
  this.r = random(4,32);

  this.update = function() {
    this.x += random(-20,20);
    this.y += random(-20,20);
  }

  this.show = function() {
    noStroke();

    let px = floor(this.x / vScale);
    let py = floor(this.y / vScale);
    let col = video.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[3], slider.value());
    ellipse(this.x, this.y, this.r, this.r);
  }

}
