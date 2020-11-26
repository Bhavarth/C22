const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var b_engine, b_world;


function setup() {
  createCanvas(400,400);

  b_engine = Engine.create();
  b_world = b_engine.world;

  var ob1_options = {
    isStatic : true
  }

  ob1 = Bodies.rectangle(200,380,400,20, ob1_options);
  World.add(b_world , ob1 );
 console.log(ob1);
 console.log(ob1.position.x);

 var ball_options = {
  restitution : 1
 }

 ball = Bodies.circle(200,200,20, ball_options);
 World.add(b_world, ball);

}

function draw() {
  background("black");  

  Engine.update(b_engine);
  fill("brown")
  rectMode(CENTER);
  rect(ob1.position.x , ob1.position.y , 400 , 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  
}