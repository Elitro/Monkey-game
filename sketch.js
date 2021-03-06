
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImagel;
var bananaGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);

  monkey = createSprite(50, 355);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(0, 390, 800, 10);
  ground.velocityX = -3;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
   if(keyDown("space")&& monkey.y >= 350){
    monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY+0.7;
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
  drawSprites();
  
  text("Score: "+score, 300, 50);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival time: "+survivalTime, 100, 50);
}

function bananas(){
  if(frameCount%80===0){
    banana = createSprite(400, 230);
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -5;
    banana.y = Math.round(random(220, 280));
    banana.lifetime = 133;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(400, 368);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 133;
    obstacle.scale = 0.1;
    
    obstacleGroup.add(obstacle);
  }
}


