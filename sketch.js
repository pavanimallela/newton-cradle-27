const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

//const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
  canvas = createCanvas(windowWidth , windowHeight);
  engine = Engine.create();
  world = engine.world;

  
 roof= new Roof(470,200,400,30);
  bob1 = new Bob(340, 450);
  bob2 = new Bob(400, 450);
  bob3 = new Bob(460, 450);
  bob4 = new Bob(520, 450);
  bob5 = new Bob(580, 450);

  rope1 = new Rope(bob1.body, { x: 340, y: 200 });
  rope2 = new Rope(bob2.body, { x: 400, y: 200 });
  rope3 = new Rope(bob3.body, { x: 460, y: 200 });
  rope4 = new Rope(bob4.body, { x: 520, y: 200 });
  rope5 = new Rope(bob5.body, { x: 580, y: 200 });
}

function draw() {
  background("black");
  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:5,y:-40});

	}
}