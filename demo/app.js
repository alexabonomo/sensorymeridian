var camMotion; // globals
var song;
var colors = [];

//setupCamera();

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
  colors[0] = color(111,184,232);
  colors[1] = color(85,182,178);
  colors[2] = color(198,218,198);
  colors[3] = color(197,192,151);
  colors[4] = color(223,152,63);

}

function draw() {
  var point = camMotion.getMovementPoint(true);
  //console.log("motion detected at point:", point);
  strokeWeight(0);
  var col = int(random(0, 4));
  console.log("line of stuff ", col);

  ellipse(point.x, point.y, 2, 2);

  //fill(colors[col]);

}
