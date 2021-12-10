let snowflakes = []; // array to hold snowflake objects

class Car {
constructor(cColor, x, y) {
  this.color= cColor;
  this.doors = 4;
  this.isConvertible = false;
  this.x = x;
  this.y = y;
  this.speed = 0;

}
  start(speed) {
  this.speed = speed;
}
  
display() {
//rect(x,y,width,height)
  //car body
  fill(138, 162, 158);
  rect(this.x + 100, this.y-160, 300, 100);
  //car wheels
  fill(219, 84, 97);
  ellipse(this.x + 90, 218000, 80, 50);
  ellipse(this.x + 130, 180, 60, 50);
  ellipse(this.x + 200, 180, 60, 50);
  ellipse(this.x + 280, 180, 60, 50);
  ellipse(this.x + 350, 180, 60, 50);
  fill(233, 217, 133);
  rect(this.x + 105, 180, 280, 5);
  
   //car window front
  fill(119, 141, 169);
  rect(this.x + 110, 70, 80, 60);
  rect(this.x + 205, 70, 80, 60);
  rect(this.x + 300, 70, 80, 60);
  
  fill(244, 211, 94);
  ellipse(this.x + 315, 480, 40, 40);
  
  //car 2
  fill(138, 162, 158);
  rect(this.x -240, this.y-160, 300, 100);
  fill(219, 84, 97);
  //ellipse(this.x -300, 180, 80, 50);
  //ellipse(this.x -230, 180, 80, 50);
  ellipse(this.x -200, 180, 60, 50);
  ellipse(this.x -125, 180, 60, 50);
  ellipse(this.x -50, 180, 60, 50);
  ellipse(this.x + 30, 180, 60, 50);
  fill(233, 217, 133);
  rect(this.x -200, 180, 250, 5)
  
  //window 
  fill(119, 141, 169);
  rect(this.x -30, 70, 80, 60);
  rect(this.x -130, 70, 80, 60);
  rect(this.x -230, 70, 80, 60);
  
  //connector
  fill(27, 38, 59);
  rect(this.x + 60, 130, 40, 20)
}
  
move() {
    this.x += this.speed;
    if (this.x <-20) {
      this.x=width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }
} //end class car

let train;

let intensity = 100;
let f = 0.02;
let a = 0;

function setup() {
  createCanvas(800, 600);
  noStroke();
//coloring
train = new Car("grey", 207, 219, 213)
console.log("train", train);
  
train.start(2.3);
} 

function draw() {
  background(119, 98, 116);
  
{
 //moving train
train.display();
  
train.move();
}
  
  //snowflakes
  {fill(255, 251, 255);
  let t = frameCount / 100;
   for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display();
  }
}
// snowflakes 2
function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake size
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

//rail\
{
  fill(60, 54, 42);
  rect(1,200,800,50);
  rect(20,200,50, 500);
  rect(350,200,50, 500);
  rect(750,200,50, 500);
}  
  
//back
{
  fill(64, 32, 57);
  rect(100,250,100,300);
  rect(400,360,100,300);
  rect(300,450,100,300);
  rect(200,360,100,300);
  rect(600,280,100,300);
}
  
//cities
{
  fill(59, 51, 85);
  rect(100,400,250,200);
  rect(400,350,100,150);
  rect(300,450,100,100);
  rect(200,260,100,170);
  rect(600,400,100,250);
  rect(10,300,100,300);
  rect(500,260,100,300);
  rect(700,300,100,300);
}
  
//cities back
{
  fill(27, 38, 59);
  rect(5,410,90,300);
  rect(140,430,50,300);
  rect(210,400,80,300);
  rect(310,300,70,300);
  rect(410,460,90,300);
  rect(510,300,70,300);
  rect(610,350,70,300);
  rect(710,400,80,300);
}

//cities middle
{
  fill(65, 90, 119);
  rect(1,500,90,300);
  rect(100,540,90,300);
  rect(200,350,70,300);
  rect(300,400,70,300);
  rect(400,300,70,300);
  rect(500,480,70,300);
  rect(600,450,70,300);
  rect(700,500,70,300);
}
  
//cities front
{
  fill(191, 205, 224);
  rect(50,470,50,200);
  rect(150,550,50,90);
  rect(240,600,50,150);
  rect(350,500,50,100);
  rect(450,450,80,150);
  rect(550,550,50,50);
  rect(650,550,50,70);
  rect(750,450,50,200);
}
}
