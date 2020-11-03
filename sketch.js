
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  constructor(body1,body2,offsetX, offsetY)
{
	this.offsetX=offsetX
	this.offsetY=offsetY
	var options={
		bodyA:body1,
		bodyB=body2,
		pointB:{x:this.offsetX, y:this.offsetY}
	}
	//console.log(options);
	this.rope=Constraint.create(options)
	World.add(world,this.rope)

	rope=new rope(bobObject.body,roofObject.body,bobDiameter*2,0)
	}
}
  drawSprites();
 
display()
{
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;

	strokeweigh(2);

	var Anchor1X = pointA.x
	var Anchor1Y = point2X.y
	
	var Anchor2X = pointB.x + this.offsetX
	var Anchor2Y = pointB.y + this.offset

	line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}


