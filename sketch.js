
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var r;
var b;
var rope1,rope2;
var rope3 , rope4;
var bob1,bob2;
var bob3 , bob4 , bob5;
var bd;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     bd=40
	//Create the Bodies Here.
	r = new roof(width/2,50,400,20);
    bob1= new bob(width/2-bd*2,550,bd)
	bob2=new bob(width/2-bd,550,bd)
	bob3= new bob(380,550,bd );
    bob4 = new bob(400,550,bd);
	bob5 = new bob(420,550,bd);
	
	rope1=new rope(bob1.body,r.body,-bd*2,0)
	rope2=new rope(bob2.body,r.body,-bd*1,0)
	rope3=new rope(bob3.body,r.body,0,0)
	rope4=new rope(bob4.body,r.body,bd*1,0)
	rope5=new rope(bob5.body,r.body,bd*2,0)
   //  rope3 = new rope()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  r.display();
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



  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})

}




}

