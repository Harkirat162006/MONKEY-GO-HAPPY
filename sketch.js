var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(600, 200);

    monkey = createSprite(50,140,20,50);
    monkey.addAnimation("monkey_running", monkey_running);
    monkey.scale = 0.1;
  
   ground = createSprite(60,175,900,30);
   ground.velocityX =-4
   ground.x = ground.width /2;
  
   obstaclesGroup = createGroup();
   bananasGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
  monkey.debug = 0 ;
  
  survivalTime=0
}


function draw() {
 background("green");
  
  
   if(keyDown("space")&&monkey.y >= 100){
    monkey.velocityY=-6
  }
  monkey.velocityY = monkey.velocityY + 0.3
 
   monkey.collide(ground)
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
  
  if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%200===0){
    stones()
 }
    
  drawSprites();
  fill("blue")
  var survivalTime=Math.round(frameCount,getFrameRate()/1);
  text("Survival Time: "+ survivalTime,450,30);
  
}

function fruits(){
  banana=createSprite(600,Math.round(random(10,90)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.08
  banana.velocityX=-3
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(600,Math.round(random(155,155)),10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}





