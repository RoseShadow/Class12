var trex;
var trexRunning;
var edges;
var ground;
var groundImage;
var invisibleGround;
var cloud,cloudImg;

function preload(){
   
  trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  cloudImg= loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);

  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5;
   edges = createEdgeSprites();

  ground=createSprite(200,180,400,20);
  ground.addImage("repeat",groundImage);
  ground.velocityX=-3;
 
  invisibleGround= createSprite(200,190,400,20);
  invisibleGround.visible=false;

  var rand=Math.round(random(100,200));
  console.log(rand);
}

function draw(){

  background("white");
   
  text(mouseX+","+mouseY,mouseX,mouseY)
  
 // console.log(trex.y);
 console.log(frameCount);

  if(keyDown("space") && trex.y>=100){
     trex.velocityY=-10;
  }
 //adding gravity
  trex.velocityY+=0.8;

  trex.collide(invisibleGround);

  if(ground.x<0){
    ground.x=ground.width/2
  }

  spawnCloud();

  drawSprites();

}

function spawnCloud(){

  if (frameCount%60===0){
    cloud= createSprite(600,100,40,10);
    cloud.addImage("cloudImg",cloudImg);
    cloud.scale=0.5;
    cloud.velocityX=-3;
    cloud.y=Math.round(random(10,60));

    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
  }
  
}
