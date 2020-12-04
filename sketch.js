var car
var wall
var speed
var weight


function preload(){
//Nothing to load
}

function setup() {
  createCanvas(600,400);
  car=createSprite(50, 200, 50, 50)
  wall=createSprite(500,200,30,300)

  //Give speed to be random between 55 and 90Km per hour
  speed=random(55,90)
  //give the weight to be random between 400 and 500 Kg
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background("black");
 

  if(car.isTouching(wall))
  {
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;

    
    if(deformation>180){
      car.shapeColor=color("red");
      fill("red")
      textSize(25)
      text("Lethal for passengers", 150,50)
    }   

    if(deformation<180 && deformation>100){
      car.shapeColor=color("yellow");
      fill("yellow")
      textSize(25)
      text("Average", 150,50)
    }

    if(deformation<100){
      car.shapeColor=color("green");
      fill("green")
      textSize(25)
      text("Safe for passengers", 150,50)
    }
  }  
  drawSprites();
}