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
  
  var ball_options = {
    restitution:0.5,
    isStatic: false
  }
  
  ball = createSprite(250,200,50,ball_options);
  World.add(world,ball);

  blowerPipe = new Blower(250,330,25,100);
  blower = new Blower(250,400,100,100);

  button = createButton("Click to Blow");
  button.position(230,350); 
  button.class("blowButton"); 
  button.mousePressed(blow);
}

function draw() 
{
  background(255,255,255);  
  ellipse(ball.position.x,ball.position.y,50);
  
  blowerPipe.display();
  blower.display();

  Engine.update(engine);
}

function blow() {
  Matter.Body.applyForce(ball.body,{x:0,y:0 },{x:0,y:-1});
}
