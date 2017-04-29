var camMotion; // globals
var song 

setupCamera();

////

function setupCamera(){
  console.log("Inintializing Camera");
  camMotion = CamMotion.Engine();
  camMotion.on("error", function (e) {console.log("camera error", e);});
  camMotion.start();
}

function preload (){
	mySound = loadSound('ASMR.mp3');

}

function setup() {
  createCanvas(640, 480);
  mySound.setVolume(0.1);
  mySound.play();

}

function draw() {
  var point = camMotion.getMovementPoint(true);
  console.log("motion detected at point:", point);
  strokeWeight(0);
  fill(230,197,92);
  ellipse(point.x, point.y, 8, 8);
}

