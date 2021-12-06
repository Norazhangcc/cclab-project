

function preload(){
  img = loadImage('assets/img2.jpg')
}

function setup() {
  createCanvas(640, 480);
  img.resize(img.width/8, img.height/8);
  background(220);

}

function draw() {

  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

      let index = (x + y * img.width) * 4;

      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      let imgX = x;
      let imgY = y;
      let col = img.get(imgX, imgY);

      push();
      //translate(imgX, imgY);
      rotate(radians(random(360)));

      fill(r, g, b);
      stroke(color(col));
      strokeWeight(5);
      point(imgX, imgY);
      strokeWeight(3);
      pop();
    }
}
}
