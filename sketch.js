const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var bg ;
var time;
var engine, world;
var backgroundImg;
var player,play, walk;

var SNOW1= [];

function preload() {

  play= loadAnimation("walk4.png")
  playBack= loadAnimation("walk13.png")
  walk= loadAnimation("walk1.png", "walk2.png", "walk3.png", "walk4.png", "walk5.png", "walk6.png", "walk7.png", "walk8.png", "walk9.png", "walk4.png");
  walkback= loadAnimation("walk10.png", "walk11.png", "walk12.png", "walk13.png", "walk14.png", "walk15.png", "walk16.png", "walk17.png", "walk18.png", "walk13.png");
  getBackgroundImg();

}


function setup() {
   canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

  player = createSprite(50,height-130,20,50);
  player.addAnimation("stay", play)
  player.addAnimation("stayback", playBack)
  player.addAnimation("run",walk)
  player.addAnimation("runback",walkback)
  player.scale= 0.25


  //snow= new Snow(20, 5, 10,10);

  


}


function draw() {
  Engine.update(engine);
  if(backgroundImg){
    background(backgroundImg);
}


  
  if(keyDown("RIGHT_ARROW")){
      player.changeAnimation("run",walk);
      player.x= player.x+5
 }
 
 if(keyWentUp("LEFT_ARROW") || keyWentUp("RIGHT_ARROW")){
  player.changeAnimation("stay", play)
 }

 if(keyWentUp("LEFT_ARROW")){
    player.changeAnimation("stayback", playBack)
 }

 if(keyDown("LEFT_ARROW")){
  player.changeAnimation("runback",walkback);
  player.x= player.x-5
} 

if(frameCount%30===0){
  SNOW1.push(new Snow(random(5,width-10),5));
}


  for(var i= 0; i<SNOW1.length;i++){
    SNOW1[i].display();
  }

//  snow.display();
 
 drawSprites()

}

 
  


async function getBackgroundImg(){

  // write code to fetch time from API
  var fish = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  //change the data in JSON format
  var fishJson= await fish.json();
  var time = fishJson.datetime
  // write code slice the datetime
  hour= time.slice(11,13);

  // add conditions to change the background images from sunrise to sunset
  if(hour>=4 && hour<6){
      bg= "sunrise1.png"
  }
  if(hour>=6 && hour<8){
      bg= "sunrise2.png"
  }
  if(hour>=8 && hour<10){
      bg= "sunrise3.png"
  }
  if(hour>=10 && hour<12){
      bg= "sunrise4.png"
  }
  if(hour>=12 && hour<14){
      bg= "sunrise5.png"
  }
  if(hour>=14 && hour<16){
      bg= "sunrise6.png"
  }
  if(hour>=16 && hour< 18){
      bg= "sunset7.png"
  }
  if(hour>=18 && hour<19){
      bg= "sunset8.png"
  }
  if(hour>=19 && hour<20){
      bg= "sunset9.png"
  }
  if(hour>=20 && hour<21){
      bg= "sunset10.png"
  }
  if(hour>=21 && hour<0){
      bg= "sunset11.png"
  }
  if(hour>=0 && hour<4){
      bg= "sunset12.png"
  }

  //load the image in backgroundImg variable here
  backgroundImg= loadImage(bg)
}
