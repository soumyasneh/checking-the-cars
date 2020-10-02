var car1;
var car2;
var car3;
var car4;
var wall;

var speed;
var weight;


function setup() {
  createCanvas(1000,600);
  
wall = createSprite(1000,200,80,800);
wall.shapeColor="teal";

car1 = createSprite(60,100,45,30);
car1.shapeColor="black";

car2 = createSprite(60,220,55,40);
car2.shapeColor="salmon";

car3 = createSprite(60,350,40,25);
car3.shapeColor="crimson";

car4 = createSprite(60,500,45,30);
car4.shapeColor="grey";

speed = random(3,5);
weight = random(400,1500);

}




function draw() {
  background(168,255,255);  

car1.velocityX=speed;
car2.velocityX=6;
car3.velocityX=speed;
car4.velocityX=5.4;

if (wall.x-car1.x < (car1.width+wall.width)/2) {
  car1.velocityX=0;

var deformation= 0.5*speed*speed*weight/22509;
if (deformation>180) {
  car1.shapeColor="red";
}
if (deformation<180 && deformation>100) {
  car1.shapeColor="yellow";
}
if (deformation<100) {
  car1.shapeColor="green";
}

}


if (wall.x-car2.x < (car2.width+wall.width)/2) {
  car2.velocityX=0;

var deformation= 0.5*speed*speed*weight/22509;
if (deformation>180) {
  car2.shapeColor="red";
}
if (deformation<180 && deformation>100) {
  car2.shapeColor="yellow";
}
if (deformation<100) {
  car2.shapeColor="green";
}

}


if (wall.x-car3.x < (car3.width+wall.width)/2) {
  car3.velocityX=0;

var deformation= 0.5*speed*speed*weight/22509;
if (deformation>180) {
  car3.shapeColor="red";
}
if (deformation<180 && deformation>100) {
  car3.shapeColor="yellow";
}
if (deformation<100) {
  car3.shapeColor="green";
}

}


if (wall.x-car4.x < (car4.width+wall.width)/2) {
  car4.velocityX=0;

var deformation= 0.5*speed*speed*weight/22509;
if (deformation>180) {
  car4.shapeColor="red";
}
if (deformation<180 && deformation>100) {
  car4.shapeColor="yellow";
}
if (deformation<100) {
  car4.shapeColor="green";
}

}


  drawSprites();
}