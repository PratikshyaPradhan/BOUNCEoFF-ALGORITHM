var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Rect3 = createSprite(700, 100, 50, 80);
  Rect3.shapeColor = "green";
  Rect3.debug = true;
  Rect4 = createSprite(700, 800,80,30);
  Rect4.shapeColor = "green";
  Rect4.debug = true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  Rect3.velocityY = +5;
  Rect4.velocityY = -5;

}

function draw() {
  background(0,0,0);  

  bounceOff(Rect3,Rect4);

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

function bounceOff( rect1,rect2 ){
  if( rect1.x - rect2.x < rect2 .width/2 + rect1.width/2
    && rect2 .x - rect1.x < rect2 .width/2 + rect1.width/2) {
      rect1.velocityX = rect1.velocityX * (-1);
      rect2 .velocityX = rect2 .velocityX * (-1);
}
if (rect1.y - rect2 .y < rect2 .height/2 + rect1.height/2
  && rect2 .y - rect1.y < rect2 .height/2 + rect1.height/2){
    rect1.velocityY = rect1.velocityY * (-1);
    rect2 .velocityY = rect2 .velocityY * (-1);
}

}