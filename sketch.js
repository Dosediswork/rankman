var path,pathImg
var Runner,RunnerImg
function preload(){
pathImg=loadImage("path.png");
RunnerImg=loadImage("Runner-1.png")
}
function setup(){
createCanvas(400,400);
//create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;
Runner=createSprite(200,300);
Runner.addImage(RunnerImg);
Runner.scale=0.05;
}
function draw() {
  background(0);
  if (path.y>400){
    path.y=height/2
  }
  drawSprites()
}