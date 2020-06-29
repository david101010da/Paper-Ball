const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;
var launcher1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = new Ground(350,700,1800,20);
	 
	dustbin1 = new Dustbin(850,680,50,450);
	dustbin2 = new Dustbin(1000,720,250,100);
	dustbin3 = new Dustbin(1100,680,50,450);

	paper = new Paper(200,590,70);

	launcher1 = new Launcher(paper.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
  launcher1.display();
 
  


 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 launcher1.fly();   
}

