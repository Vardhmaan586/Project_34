const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImage;

var ground;
var hero;
var rope;

var block1,block2,block3,block4,block5,block6;
var block11,block12,block13,block14,block15,block16,block17,blocks18;
var monster;

function preload() {
backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1500, 800);
  
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,750,1200,20);
    hero = new Hero(600,300,150);
    rope = new Fly(hero.body,{x:600,y:300});

    block1 = new Blocks(800,705);
    block2 = new Blocks(800,670);
    block3 = new Blocks(800,635);
    block4 = new Blocks(800,600);
    block5 = new Blocks(800,565);
    block6 = new Blocks(800,530);
    block11 = new Blocks(870,705);
    block12 = new Blocks(870,670);
    block13 = new Blocks(870,635);
    block14 = new Blocks(870,600);
    block15 = new Blocks(870,565);
    block16 = new Blocks(870,530);
    block17 = new Blocks(870,495);
    block18 = new Blocks(870,460);

    monster = new Monster(1150,200,200);
}

function draw() {
  background(backgroundImage);
  
  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}