
var roadImg

function preload (){

roadImg = loadImage ("road.png")



}


function setup() {
  createCanvas(800,400);
  road = createSprite (100,260,200,200)
  road.velocityX = -10
  
road.addImage(roadImg)
road.scale = 0.5
}

function draw() {
  background(400,800);  
  drawSprites();
  if (road.x<0){
  road.x = width/2

    

  }
}