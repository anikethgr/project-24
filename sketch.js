
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectangle1, rectangle2, rectangle3;
var world, engine, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	

	paper = new Paper(200, 349, 50);

	rectangle1=createSprite();

	ground = new Ground(600,100,1200,20);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
	paper.display();
	ground.display();

}



