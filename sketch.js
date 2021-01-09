const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,log1,log2,log3,log4, bird ;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,500,70,70);
    box2 = new Box(760,500,70,70);
    box3 = new Box(600,400,70,70);
    box4 = new Box(760,400,70,70);
    box5 = new Box(680,300,70,70);
    pig1 = new Pig(680,500);
    pig2 = new Pig(680,400);
    log1 = new Log(680,450,250,PI/2);
    log2 = new Log(680,360,250,PI/2);
    log3 = new Log(600,700,150, PI/6);
    log4  =new Log(760,630,150,-PI/7);
    ground = new Ground(500,height,1000,20);
    bird = new Bird(100,100);
   }
   

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}