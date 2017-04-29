var camMotion; // globals

setupCamera();

////

function setupCamera(){
  console.log("Inintializing Camera");
  camMotion = CamMotion.Engine();
  camMotion.on("error", function (e) {console.log("camera error", e);});
  camMotion.start();
}


function setup() {
  createCanvas(640, 480);
}

function draw() {
  var point = camMotion.getMovementPoint(true);
  console.log("motion detected at point:", point);
  strokeWeight(0);
  fill(230,197,92);
  ellipse(point.x, point.y, 7, 7);
}

