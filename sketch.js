var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;

  movingrect = createSprite(400, 200, 80, 40);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
}

function draw() {
  movingrect.x = mouseX;
  movingrect.y = mouseY;

 // console.log(movingrect.x-fixedrect.x);
  console.log(fixedrect.x - movingrect.x);

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2  &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
  {
    fixedrect.shapeColor = "yellow";
    movingrect.shapeColor = "yellow";
  }

  else
  {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  } 
  background("black");  
  drawSprites();
}