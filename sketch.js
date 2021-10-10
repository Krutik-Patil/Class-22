const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var ground_options = {
  isStatic:true
}
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

var ball_options = {
  restitution:0.9
}
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball); 

 var ball2_options = {
   restitution:1.3
 }
 ball2 = Bodies.circle(100,100,20,ball2_options);
 World.add(world,ball2);
}

function draw() {
  background(0,0,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  
}