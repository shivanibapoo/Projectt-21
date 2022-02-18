const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
let world;
let engine;

//function preload() {

//}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	groundObj=new Ground(200,380,400,10);
	leftSide=new Ground(260,349,10,60);
	rightSide= new Ground(360,349,10,60);

	ball = new Ball(100,200,10);
	
	World.add(world, groundObj);
	World.add(world, leftSide);
	World.add(world, rightSide);
	

	rectMode(CENTER);
	ellipseMode(RADIUS);


	Engine.run(engine);

}




function draw() {

	function keyPressed(){
		if (keyCode === UP_ARROW){
			Body.applyForce(ball.body, ball.body.position, Matter.Vector.create(0.1, -1.08));
		}
	}
	
	background(51);
	Engine.update(engine);

	ball.show();
	groundObj.show();
	leftSide.show();
	rightSide.show();
	keyPressed();

	drawSprites();

}