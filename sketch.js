var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaves, leavesImg
var framecount = 80
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png")
  leavesImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//making apples

//making leaves
leaves = createSprite(150,0,30,30)
leaves.addImage("leaveImage", leavesImg)
leaves.scale = 0.07
createApples()
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (keyDown("left_arrow")){
    rabbit.x = rabbit.x -10
  }
  if (keyDown("right_arrow")){
    rabbit.x = rabbit.x +10
  }
  
  var select_sprites = Math.round(random(1,2))

  if (framecount %80 == 0){
      if (select_sprites ==1 ){
        createApples()
      }
    else {
      createLeaves()
    }
  }
  drawSprites();
}

function createApples(){
  if(frameCount%80==0){
     apple = createSprite (200,0,30,30)
    apple.addImage("appleImage", appleImg)
    apple.scale = 0.07 
    apple.velocityY = 3
    apple.y = Math.round(random(1,60))
    apple.lifetime= 100

  
    
  }
}
function createLeaves(){
  if(frameCount%80==0){
    leaves.y = Math.round(random(1,60))
     leaves = createSprite (150,0,30,30)
    leaves.addImage("leavesImage",leavesImg)
    leaves.scale = 0.07 
    leaves.velocityY = 3
  
    leaves.lifetime= 100

  
    
  }
}