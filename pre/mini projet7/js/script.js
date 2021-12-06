let dancer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dancer = new NoraDancer(150,100);
}

function draw() {
  background(0);
  dancer.update();
  dancer.display();
}

class NoraDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.color1 = "black";
    this.color2 = "white";
    this.freq1 = random(0.05,0.15);
    this.amp = random(0.5,1);
    this.freq2 = random(0.22,0.4);
  }
  update(){
    this.swingHead();
    this.swingArm();
  }


  display(){

    push();
    this.drawLeg();
    this.drawBody();
    pop();

    push();
    this.drawArm(this.swingArm());
    pop();

    push();
    this.drawHead(this.swingHead());
    pop();
  }


  drawLeg(){
    push();
    translate(this.x,this.y);
    strokeWeight(2.5);
    fill(this.color2);
    ellipse(this.x + 28, this.y + 90, 25,70);
    ellipse(this.x - 28, this.y + 90, 25,70);
    pop();
  }


   drawBody(){
    push();
    beginShape();
    translate(this.x,this.y);
    fill(this.color2);
    strokeWeight(2.5);
    ellipse(this.x, this.y + 60, 90,100);
    endShape();
    pop();
   }

   drawArm(){
     //left arm part
    push();
    beginShape();
    translate(this.x,this.y);
    strokeWeight(2.5);
    fill(this.color2);
    vertex(this.x + 36, this.y + 40);
    vertex(this.x + 65, this.y + 50);
    vertex(this.x + 55, this.y + 53);
    vertex(this.x + 65, this.y + 60);
    vertex(this.x + 39, this.y + 58);
    endShape();
    pop();

  //right arm part
    push();
    beginShape();
    translate(this.x,this.y);
    strokeWeight(2.5);
    fill(this.color2);
    vertex(this.x - 36, this.y + 40);
    vertex(this.x - 65, this.y + 50);
    vertex(this.x - 55, this.y + 53);
    vertex(this.x - 65, this.y + 60);
    vertex(this.x - 39, this.y + 58);
    endShape();
    pop();

   }

  drawHead(){
    //head part
    push();
    translate(this.x,this.y);
    strokeWeight(2.5);
    ellipse(this.x, this.y, 120, 90);
    ellipse(this.x, this.y + 7, 50, 30);
    ellipse(this.x - 6.5, this.y + 5, 8,8);
    ellipse(this.x + 6.5, this.y + 5, 8,8);

  //ear part
    beginShape();
    fill(this.color2);
    vertex(this.x - 45, this.y - 29);
    vertex(this.x - 38, this.y - 52);
    vertex(this.x - 15, this.y - 43);
    endShape();

    beginShape();
    fill(this.color2);
    vertex(this.x + 45, this.y - 29);
    vertex(this.x + 38, this.y - 52);
    vertex(this.x + 15, this.y - 43);
    endShape();

    fill(this.color1);
    circle(this.x + 18, this.y - 15, 6);
    circle(this.x - 18, this.y - 15, 6);
    pop();
  }

  swingHead(){
    rotate(radians(sin(frameCount * this.freq1) * this.amp + cos(frameCount * this.freq1) * this.amp));
  }

  swingArm(){
    rotate(radians(sin(frameCount * this.freq2) * this.amp + cos(frameCount * this.freq2) * this.amp));
  }
}
