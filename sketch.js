
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	background("white")


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(600, 680, 1200, 20)

	left= new Dustbin(900, 600, 10, 180)
	right= new Dustbin(1100, 600, 10, 180)
	bottom= new Dustbin(1000, 665, 200, 10)

	ball= new Ball(100, 100, 20)

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  left.display();
  right.display();
  bottom.display();
  ground.display();
  ball.display();
  
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}

