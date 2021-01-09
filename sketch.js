
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,wall1,wall2,wall3;


function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
  
  
	//Create the Bodies Here.
	paper = new Paper(300,200);
  ground = new Ground(500,570,1000,10);
  
  wall1 = new Dustbin(600,520,100,PI);
  
  wall2 =new Dustbin(800,520,100,PI);
  
	wall3 = new Dustbin(700,560,173,PI/2);
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  
 
  Engine.update(engine);  
  paper.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
   
}
function keyPressed()
      { if(keyCode === UP_ARROW)
        {  
             
          Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-85});
          console.log("hello");
        }

      }


