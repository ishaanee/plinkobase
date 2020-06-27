const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var divisionHeight=300

function setup() {
  createCanvas(480,720);
  var particles=[]
  var plinkos=[1,2,3,4,5,6]
  var divisions=[]
  engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(240,715,480,15);
   division1 = new Divisions(80,708,10,400);
     division2 = new Divisions(160,708,10,400);
    division3 = new Divisions(240,708,10,400);
    division4 = new Divisions(320,708,10,400);
    division5 = new Divisions(400,708,10,400);
    cir1= new Plinko(100,100,10,10);
    cir2= new Plinko(200,100,10,10);
    cir3= new Plinko(300,100,10,10);
    cir4= new Plinko(400,100,10,10);

    circle1= new Plinko(100,200,10,10);
    circle2= new Plinko(200,200,10,10);
    circle3= new Plinko(300,200,10,10);
    circle4= new Plinko(400,200,10,10);
    circle5= new Plinko(100,300,10,10);
    circle6= new Plinko(200,300,10,10);
    circle7= new Plinko(300,300,10,10);
    circle8= new Plinko(400,300,10,10);
    circle9= new Plinko(100,400,10,10);
    circle10= new Plinko(200,400,10,10);
    circle11= new Plinko(300,400,10,10);
    circle12= new Plinko(400,400,10,10);
    circle13= new Plinko(100,500,10,10);
    circle14= new Plinko(200,500,10,10);
    circle15= new Plinko(300,500,10,10);
    circle16= new Plinko(400,500,10,10);
    /*circle17= new Plinko(100,450,10,10);
    circle18= new Plinko(200,450,10,10);
    circle19= new Plinko(300,450,10,10);
    circle20= new Plinko(400,450,10,10);*/
    

    
    

}

function draw() {
  Engine.update(engine);
  background(255,255,25);  
  ground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
circle1.display()
circle2.display()
circle3.display()
circle4.display()
circle5.display()
circle6.display()
circle7.display()
circle8.display()
circle9.display()
circle10.display()
circle11.display()
circle12.display()
circle13.display()
circle14.display()
circle15.display()
/*circle16.display()
circle17.display()
circle18.display()
circle19.display()
circle20.display()*/
cir1.display()
cir2.display()
cir3.display()
cir4.display()
 
}