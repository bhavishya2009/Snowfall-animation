const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bgImg;
var snowImg;
var engine,world;
var fall = [];
var snowman,snowmanImg;

function preload() {
  bgImg = loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp");
  snowmanImg = loadImage("snowman.png");
}

function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;
  snowman = createSprite(1200,350);
  snowman.scale = 0.7;
  snowman.addImage(snowmanImg);
}

function draw() {
  background(bgImg);
  Engine.update(engine);  

  if (frameCount%5 === 0){
    fall.push(snow = new Snow());
  }

  for(var i=0; i<fall.length; i++){
    fall[i].show();
  }
  drawSprites();
}