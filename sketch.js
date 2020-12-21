var wall,thickness;
var bullet;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight= random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,60,15);
  bullet.velocityX=speed;

}

function draw() {
  background(2);  

  
  wall = createSprite(1500,200,thickness,height/2);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) 
  {
    bullet .velocityX = 0
    var damage = 0.5 * weight * speed*speed/(thickness*thickness*thickness);
    if (damage>10)
    {
      wall.shapeColor = color(255,0,0);
      wall.width = thickness;

    }

    if (damage<10)
    {
      wall.shapeColor = color(0,255,0);
      wall.width = thickness;
    }

  }
  drawSprites();
}

