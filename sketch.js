
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,800);
  
 engine = Engine.create();
 world = engine.world;
 
 box1 = new Box(220,50,50,100)
 box2 = new Box(200,100,50,50)
 ground = new Ground()
 
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();

}