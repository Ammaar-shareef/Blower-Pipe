const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var blower,blowerPipe;

function setup() 
{
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  
  ball = createSprite(250,200,50);
  World.add(world,ball);

  blowerPipe = new Blower(250,300,25,50);
  blower = new Blower(250,350,50,50);

  button = createButton("Click to Blow");
  button.position(250,300); 
  button.class("blowButton"); 
  button.mousePressed(blow);
}

function draw() 
{
  background(255,255,255);  
  ellipse(ball.position.x,ball.position.y,15);
  
  blowerPipe.display();
  blower.display();

  Engine.update(engine);
  drawSprites();
}

function blow() {
  Matter.Body.applyForce(ball.body,{x:0,y:0 },{x:0,y:-0.05});
}
