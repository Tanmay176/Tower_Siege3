const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var ground1, ground2, ground3;
var block1, block2, block3, block4, block5, block6, block7, block8, block9,
 block10,block11,block12, block13, block14,
 block15, block16, block17, block18, block19, block20, block21,
 block22;
var sling;
var player;
var polygon;
var hexagonimg;

function preload(){
  hexagonimg = loadImage("hexagon.png");
}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);
  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);
  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);
  block13 = new Block(600,140,30,40);
  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);
  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);
  block22 = new Block(900,110,30,40);
  block23 = new Block(1215,430,30,40);
  block24 = new Block(1185,430,30,40);
  block25 = new Block(1245,430,30,40);
  block26 = new Block(1275,430,30,40);
  block27 = new Block(1155,430,30,40);
  block28 = new Block(1125,430,30,40);
  block29 = new Block(1275,400,30,40);
  block30 = new Block(1125,400,30,40);
  block31 = new Block(1125,370,30,40);
  block32 = new Block(1275,370,30,40);
  block33 = new Block(1245,400,30,40);
  block34 = new Block(1155,400,30,40);
  block35 = new Block(1307,430,30,40);
  block36 = new Block(1093,430,30,40);
  block37 = new Block(1200,400,30,40);
  block38 = new Block(1200,380,30,40);
  block39 = new Block(1200,360,30,40);

  player = new Player(50,200,30,30);



  ground1 = new Ground(600,350,200,10)
  ground2 = new Ground(900,230,200,10)
  ground3 = new Ground(750,600,1500,10)
  ground4 = new Ground(1200,500,250,10)
  ground5 = new Ground(100,470,300,370)
  
  polygon = Bodies.circle(70,250,20);
  World.add(world,polygon);

  sling = new Chain(this.polygon,{x:150, y:160});

}

function draw() {
  background("grey");
  Engine.update(engine);

  fill("Black")
  textSize(40)
  textFont("Agency FB")
  text("Can you destroy all the tower",500,50)
  text("If clicking on space you will get one more chance",400,580)

  fill(rgb(135, 205, 236));

  block1.display()
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();
  fill(rgb(135, 205, 236));

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill("lightGreen")

  block29.display();
  block30.display();
  block31.display();
  block32.display();

  fill("lightblue")

  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  fill(rgb(47, 48, 48))
  block39.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  imageMode(CENTER);
  image(hexagonimg,polygon.position.x,polygon.position.y,40,40);
  sling.display();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
  sling.attach(this.polygon)
  }
  }