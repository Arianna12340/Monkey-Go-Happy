
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  
monkey = createSprite(50,350);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(300,400,600,100);
  
}


function draw() {
background("lightblue");
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  spawnbanana();
  spawnObstacles();
  monkey.collide(ground);
  drawSprites();
  
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var b1 = createSprite(600,120,40,10);
    b1.y = Math.round(random(30,120));
    b1.addImage("bananaImage",bananaImage);
    b1.scale = 0.1;
    b1.velocityX = -3;
  }
}
function spawnObstacles() {
  if (frameCount % 160 === 0) {
    var o1 = createSprite(200,300,40,10);
    o1.addImage("obstacleImage",obstacleImage);
    o1.scale = 0.3;
    o1.velocityX = -3;
  }
}



