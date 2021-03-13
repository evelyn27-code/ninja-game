
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5, mango6,mango7,mango8,mango9;
var gold1,gold2,gold3,gold4;
var knive1,knive2,knive3,knive4,knive5;
var world,boy;
var scoreNS = 0;
var scoreNK = 0;
var scoreNGS =0;
var gameState = play;
var backgroundImg;
var score = 0;
var gameState = "onSling";


function preload(){
	boy=loadImage("ninja transparejt.webp");
  backgroundImg = loadImage("cave.jpg")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	mango1=new mango(830,50,20);
	mango2=new mango(890,150,20);
	mango3=new mango(1200,200,20);
	mango4=new mango(1250,300,20);
	mango5=new mango(1100,400,20);
	mango6=new mango(940,500,20);
    mango7=new mango(1100,550,20);
	mango8=new mango(1070,90,20);
  mango9=new mango(950,290,20);

  
  knive1=new knives(1200,50,30);
  knive2=new knives(840,240,30);
  knive3=new knives(950,400,30);
  knive4=new knives(1100,270,30);
  knive5=new knives(1200,500,30);

  gold1=new gold(980,50,20);
  gold2=new gold(1000,240,20);
  gold3=new gold(850,500,20);
  gold4=new gold(1230,400,20);
  
  stone1 =new stone(237,405,30)
  slingshot = new SlingShot(stone1.body,{x:237, y:425});
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
  


	Engine.run(engine);

}

function draw() {

  background(backgroundImg);
  fill("white");

  
  
  
 
  textSize(20);
  text("NINJA STARS: "+scoreNS,10,20)
 text("NINJA KNIVES: "+scoreNK,190,20)
 text("NINJA GOLD STARS: "+scoreNGS,380,20)
  image(boy ,70,325,200,300);
 
  fill("white")
 // textSize(15);
 // text("DRAG AND RELEASE THE NUN CHAKU AND GET THE NINJA WEAPONS ON THE WALL",5,50)
  textSize(20)
  text("PRESS 'SPACE' TO GET THE NINJA (NUN CHAKU) BACK",10,50);
  
  
  slingshot.display();
  treeObj.display();
  mango1.display();
  mango1.scoreNS();
  mango2.display();
  mango2.scoreNS();
  mango3.display();
  mango3.scoreNS();
  mango4.display();
  mango4.scoreNS();
  mango5.display();
  mango5.scoreNS();
  mango6.display()
  mango6.scoreNS();
  mango7.display();
  mango7.scoreNS();
  mango8.display();
  mango8.scoreNS();
  mango9.display();
  mango9.scoreNS();


  stone1.display();
  


  knive1.display();
  knive1.scoreNK();
  knive2.display();
  knive2.scoreNK();
  knive3.display();
  knive3.scoreNK();
  knive4.display();
  knive4.scoreNK();
  knive5.display();
  knive5.scoreNK();


  gold1.display();
  gold1.scoreNGS();
  gold2.display();
  gold2.scoreNGS();
  gold3.display();
  gold3.scoreNGS();
  gold4.display();
  gold4.scoreNGS();


//if(stone1.body.position.x > 500){
 
//}

//if(count === 2){
  //gameState = "END";
//}

if(scoreNS >=9  && scoreNK >= 5&& scoreNGS >= 20){
  fill("red");
  stroke("red")
  textSize(70);
  text("MISSSION COMPLETED",200,250);
  textSize(50); 
  text("All weapons collected",400,350)
}
//if(gameState === "END"&& scoreNS!==9 && scoreNK!==5 && scoreNGS!==20){
  //fill("yellow");
  //textSize(70);
  //text("YOU LOOSE",400,400);
//}
 
/*
 if (score>=8){
   treeObj.display() = false;

 }
*/
 detectcollision(stone1,knive1);
 detectcollision(stone1,knive2);
 detectcollision(stone1,knive3);
 detectcollision(stone1,knive4);
 detectcollision(stone1,knive5);


 detectcollision(stone1,gold1);
 detectcollision(stone1,gold2);
 detectcollision(stone1,gold3);
 detectcollision(stone1,gold4);


detectcollision(stone1,mango1);
detectcollision(stone1,mango2);
detectcollision(stone1,mango3);
detectcollision(stone1,mango4);
detectcollision(stone1,mango5);
detectcollision(stone1,mango6);
detectcollision(stone1,mango7);
detectcollision(stone1,mango8);
detectcollision(stone1,mango9);


  groundObject.display();
}




function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  }
  
}

function mouseReleased(){
  slingshot.fly();
  score = score+1;
  console.log(score)  
 gameState = "launched";

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:237,y:405});
      slingshot.attach(stone1.body);
      gameState = "onSling";
   
  }
  }
  function isTouching(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2
      && object2.x-object1.x < object2.width/2+object1.width/2
      && object1.y-object2.y<object2.height/2+ object1.height/2
      && object2.y-object1.y< object2.height/2+object1.height/2) {
       object2.isStatic=false
       
       World.remove(world,object2.body);
       
  push()
  
  tint(255,object2.Visibility);
  pop()      
      // object2.shapeColor = "red";
   }
   else{
      
       object2.isStatic=true
       //object2.shapeColor = "green";
   }
   
   
   }
  function detectcollision(lstone,lmango){
   var mangoBodyPosition = lmango.body.position
   var stoneBodyPosition = lstone.body.position

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false)
   }
  }