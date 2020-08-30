const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20);

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

}

function draw() {
  background(0);  

  ground.display();
  drawSprites();
}