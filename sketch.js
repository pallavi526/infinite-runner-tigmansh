 var universe2Img,universe2;
 var RocketImg,Rocket;
 
 function preload(){
  universe2Img = loadImage("universe 2.png");
  RocketImg = loadImage("Rocket.png");
}
function setup() {
    createCanvas(400,400);
    universe2 = createSprite(200,200,200,200);
    universe2.addImage("universe2",universe2Img);
    universe2.velocityY = 4;

    Rocket = createSprite(200,350,10,10);
    Rocket.addImage("Rocket",RocketImg);
 }

function draw() {
  if(keyDown(RIGHT_ARROW)){
    Rocket.velocityX += 5;
  }
    if(keyDown(LEFT_ARROW)){
      Rocket.velocityX -= 5;
  }
  
}