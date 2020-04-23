var Fixed, Moving;

function setup() {
  createCanvas(800,400);
  Fixed=createSprite(300, 200, 30, 80);
  Moving=createSprite(500, 200, 80, 30);

  Moving.shapeColor="blue";
  Fixed.shapeColor="purple";

  //Fixed.debug=true;
  //Moving.debug=true;

}

function draw() {
  background(17, 0, 114);
  
  Moving.x=mouseX;
  Moving.y=mouseY;

  if(Moving.x-Fixed.x<Moving.width/2+Fixed.width/2 && 
    Fixed.x-Moving.x<Moving.width/2+Fixed.width/2 && 
    Moving.y-Fixed.y<Moving.height/2+Fixed.height/2 &&
    Fixed.y-Moving.y<Moving.height/2+Fixed.height/2){

    Moving.shapeColor="yellow";
    Fixed.shapeColor="red";
  }
  else{
    Moving.shapeColor="blue";
    Fixed.shapeColor="purple";
  }

  drawSprites();
}