/*var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(350,200,60,60);
}

function draw() {
  background(255,255,255);  
  rect2.x=mouseX;
  rect2.y=mouseY;
  if(rect2.x-rect1.x<(rect1.width+rect2.width)/2
  && rect1.x-rect2.x<(rect1.width+rect2.width)/2
  && rect2.y-rect1.y<(rect1.height+rect2.height)/2
  &&rect1.y-rect2.y<(rect1.height+rect2.height)/2){
    rect1.shapeColor=rect2.shapeColor="violet";
  }else{rect1.shapeColor=rect2.shapeColor="green";}
  drawSprites();
}*/
var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(600,400,50,50);
  o2=createSprite(900,600,50,50);
  o2.velocityX=-3;o2.velocityY=-2;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  isTouching(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect)===true){
    movingRect.shapeColor=fixedRect.shapeColor="pink";
  }else{movingRect.shapeColor=fixedRect.shapeColor="green";}
  bounceOff(o2,o1);
  drawSprites();
}
