let sound;
let song;
let amp;

function preload(){
  //load image sound text table
  sound = loadSound("assets/beat.mp3");
  song = loadSound("assets/song.mp3")
}


function keyPressed(){
  if (key == "p") {
    if (song.isPlaying() == false){
          song.play();
      }
  }
  else if (key == "s"){
    song.stop();
  }
}


function mousePressed(){
  if (sound.isPlaying() == false){
      sound.play();
  }
}

function setup() {
  let canvas = createCanvas(400,500);
  canvas.mousePressed(userStartAudio);
  background(220);

  amp = new p5.Amplitude();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  /*let vol = map (mouseY, 0, height, 1.00, 0.00, true);
  song.setVolume(vol);
  let panning = map (mouseX, 0, width, -1.00, 1.00, true);
  song.pan(panning);*/

  /*let volume = amp.getLevel();
  console.log(floor(volume * 100));
  let dia = map(volume, 0, 1, 10, 500);
  noStroke();
  fill(100,200,100);
  ellipse(width/2, height/2, dia,dia);*/

  let volume = mic.getLevel();
  console.log(floor(volume * 100));
  let dia = map(volume, 0, 1, 10, 500);
  noStroke();
  fill(100,200,100);
  ellipse(width/2, height/2, dia,dia);
}
