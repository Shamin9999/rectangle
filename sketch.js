var fixedRect,movingRect;
function setup() {
  createCanvas(600,600);
  fixedRect= createSprite(300, 300, 100, 100);
  movingRect= createSprite(400, 200, 100, 100);

}

function draw() {
  background("purple");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x - movingRect.x <=fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2 && 
  fixedRect.y - movingRect.y <=fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="yellow";
  fixedRect.shapeColor="yellow";

}
else{movingRect.shapeColor="orange";
fixedRect.shapeColor="orange";

}
  drawSprites();
}
