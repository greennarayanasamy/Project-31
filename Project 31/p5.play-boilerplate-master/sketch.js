const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground, plinko1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(100,790,800,30);
  plinko1 = new Plinko(20,20,20,20);
}

function draw() {
  background(0);  
  ground.display();
  drawSprites();
}