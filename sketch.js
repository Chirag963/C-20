var a , b;

function setup() {
  createCanvas(800,400);
  
  a = createSprite(200,200,30,30);
  a.shapeColor="red";
  b = createSprite(100,200,30,30);
  b.shapeColor="red";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "purple";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "purple";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "purple";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "purple";
}

function draw() {
  background(255,255,255);
  bounceOff(a, b);

 a.x=World.mouseX;
 a.y=World.mouseY;
 
 if(isTouching(a,gameObject1)) {
  a.shapeColor = "yellow";
  gameObject1.shapeColor = "green";
 }
 else{
   a.shapeColor = "red";
   gameObject1.shapeColor = "red";
 }
  bounceOff(a, b); 
  isTouching(a, b);
  drawSprites();
}



