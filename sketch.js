
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roofObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var ropeObject1,ropeObject2,ropeObject3,ropeObject4,ropeObject5
var roof1,roof2,roof3,roof4,roof5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 550);
  bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObject=new roof(680,100,500,40)
	bobObject1=new bob(570,300);
	bobObject2=new bob(620,300);
	bobObject3=new bob(670,300);
	bobObject4=new bob(720,300);
	bobObject5=new bob(770,300);

  

  ropeObject1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
  ropeObject2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
  ropeObject3=new rope(bobObject3.body,roofObject.body,+bobDiameter*0,0);
  ropeObject4=new rope(bobObject4.body,roofObject.body,+bobDiameter*1,0);
  ropeObject5=new rope(bobObject5.body,roofObject.body,+bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("rgb(166, 166, 166)");
  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyPressed===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});}
}



