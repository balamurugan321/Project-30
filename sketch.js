const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,wall1,wall2;
var stand1,stand2;
var polygon_img;
var polygon;
var slingShot;
var bg;
var drag=true;

function preload(){
  polygon_img=loadImage("polygon.png");
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  wall1 = new Stand(-11,(height*height)/2,20,height*height);
  wall2 = new Stand(width+11,(height*height)/2,20,height*height);
  stand1 = new Stand(560,400,320,20);
  stand2 = new Stand(950,250,320,20);
 
  no1=440
  no2=830
  yno1=235;
  yno2=85;
  widblock=40;
  heightblock=50;

  //level one
  block1 = new Block(no1,yno1+120,widblock,heightblock);
  block2 = new Block(no1+40,yno1+120,widblock,heightblock);
  block3 = new Block(no1+80,yno1+120,widblock,heightblock);
  block4 = new Block(no1+120,yno1+120,widblock,heightblock);
  block5 = new Block(no1+160,yno1+120,widblock,heightblock);
  block6 = new Block(no1+200,yno1+120,widblock,heightblock);
  block7 = new Block(no1+240,yno1+120,widblock,heightblock);
  //level two
  block8 = new Block(no1+40,yno1+80,widblock,heightblock);
  block9 = new Block(no1+80,yno1+80,widblock,heightblock);
  block10 = new Block(no1+120,yno1+80,widblock,heightblock);
  block11 = new Block(no1+160,yno1+80,widblock,heightblock);
  block12 = new Block(no1+200,yno1+80,widblock,heightblock);
  //level three
  block13 = new Block(no1+80,yno1+40,widblock,heightblock);
  block14 = new Block(no1+120,yno1+40,widblock,heightblock);
  block15 = new Block(no1+160,yno1+40,widblock,heightblock);
  //top
  block16 = new Block(no1+120,yno1,widblock,heightblock);

  //level one
  ublock1 = new Block(no2,yno2+120,widblock,heightblock);
  ublock2 = new Block(no2+40,yno2+120,widblock,heightblock);
  ublock3 = new Block(no2+80,yno2+120,widblock,heightblock);
  ublock4 = new Block(no2+120,yno2+120,widblock,heightblock);
  ublock5 = new Block(no2+160,yno2+120,widblock,heightblock);
  ublock6 = new Block(no2+200,yno2+120,widblock,heightblock);
  ublock7 = new Block(no2+240,yno2+120,widblock,heightblock);
  //level two
  ublock8 = new Block(no2+40,yno2+80,widblock,heightblock);
  ublock9 = new Block(no2+80,yno2+80,widblock,heightblock);
  ublock10 = new Block(no2+120,yno2+80,widblock,heightblock);
  ublock11 = new Block(no2+160,yno2+80,widblock,heightblock);
  ublock12 = new Block(no2+200,yno2+80,widblock,heightblock);
  //level three
  ublock13 = new Block(no2+80,yno2+40,widblock,heightblock);
  ublock14 = new Block(no2+120,yno2+40,widblock,heightblock);
  ublock15 = new Block(no2+160,yno2+40,widblock,heightblock);
  //top
  ublock16 = new Block(no2+120,yno2,widblock,heightblock);

  xpos=200;
  ypos=200;
  polygon = Bodies.circle(xpos,ypos,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:200,y:200});
}
function draw() {
  console.log(this.polygon.position)
  background(bg);
  if(drag===false){
  stroke(2);
  fill("black");
  textSize(45);
  text("Press space to throw again",100,80);
}
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(57, 227, 34);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(245, 230, 17);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(255, 103, 20);
  block13.display();
  block14.display();
  block15.display();
  fill(212, 8, 15);
  block16.display();
  
  strokeWeight(2);
  stroke(15);
  fill(0, 242, 218);
  ublock1.display();
  ublock2.display();
  ublock3.display();
  ublock4.display();
  ublock5.display();
  ublock6.display();
  ublock7.display();
  fill(63, 147, 242);
  ublock8.display();
  ublock9.display();
  ublock10.display();
  ublock11.display();
  ublock12.display();
  fill(143, 138, 235);
  ublock13.display();
  ublock14.display();
  ublock15.display();
  fill(89, 10, 207);
  ublock16.display();
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,60,60);

  slingShot.display();
}
function mouseDragged(){
  if(drag){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  slingShot.fly();
  drag=false;
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:xpos,y:ypos});
      slingShot.attach(this.polygon);
      drag=true;
  }
}
