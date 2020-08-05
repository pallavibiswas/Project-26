
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(500,580,1000,20);
	box = new Dustbin(800,490,180,190);
  paper = new Paper();
  chain = new Launcher(paper.body,{x:200,y:100});
}
  //function keyPressed()  {
  //if (keyCode === UP_ARROW)
    //{ Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-90})};
  //}

function draw() {
  Engine.run(engine);
  background(230);
  paper.display();
  box.display();
  ground.display();
  chain.display();
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
  chain.fly();
}
