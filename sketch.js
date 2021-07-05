var bgImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4,issImg;
var hasDocked,iss,spaceCraft;

function preload(){

  bgImg = loadImage("Docking-undocking/spacebg.jpg")
  issImg = loadImage("Docking-undocking/iss.png");
  spaceCraftImg1 = loadAnimation("Docking-undocking/spacecraft1.png")
  spaceCraftImg2 = loadAnimation("Docking-undocking/spacecraft2.png")
  spaceCraftImg3 = loadAnimation("Docking-undocking/spacecraft3.png")
  spaceCraftImg4 = loadAnimation("Docking-undocking/spacecraft4.png")
}


function setup() {
  createCanvas(1200,1500);

  hasDocked = false;

  spaceCraft = createSprite(395,400);
  spaceCraft.addAnimation("1",spaceCraftImg1)
  spaceCraft.scale = 0.30

  iss = createSprite(450,200)
  iss.addImage(issImg)
  
}

function draw() {
  background(bgImg); 
 if(!hasDocked){ 
  if(keyDown("LEFT")){
    spaceCraft.addAnimation("2",spaceCraftImg3)
    spaceCraft.changeAnimation("2")
    spaceCraft.x-=1
    spaceCraft.scale = 0.30
  }
  if(keyDown("RIGHT")){
    spaceCraft.addAnimation("3",spaceCraftImg4)
    spaceCraft.changeAnimation("3")
    spaceCraft.x+=1
    spaceCraft.scale = 0.30
  }
  if(keyDown("DOWN_ARROW")){
    spaceCraft.addAnimation("4",spaceCraftImg2)
    spaceCraft.changeAnimation("4")
  }
  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y -1

  }

  if(spaceCraft.y === 304){
    hasDocked = true;
  }
}
  if(hasDocked!== false){
    stroke(2)
    fill("ORANGE")
    textSize(24)
    text("DOCKING SUCCESFUL !!", 600,750)
  }

  console.log(spaceCraft.x)

  drawSprites();
}