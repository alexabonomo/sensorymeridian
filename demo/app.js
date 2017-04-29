var camMotion; // globals
var song;
var chrome = [];

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
  createCanvas(1080, 1920);
  mySound.setVolume(0.1);
  mySound.play();
  var chrome = [
    fill(111,184,232),
    fill(85,182,178),
    fill(198,218,198),
    fill(197,192,151),
    fill(223,152,63)
  ];
  print(chrome[3]);
}

function draw() {
  var point = camMotion.getMovementPoint(true);
  console.log("motion detected at point:", point);
  strokeWeight(0);
  //random(chrome);
chrome[3];
  ellipse(point.x, point.y, 6, 6);
}
