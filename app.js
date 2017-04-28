var camMotion; // globals

setupCamera();

////

function setupCamera(){
  console.log("Inintializing Camera");
  camMotion = CamMotion.Engine();
  camMotion.on("error", function (e) {console.log("camera error", e);});
  camMotion.on("frame", reactToMotion);
  camMotion.start();
}

function reactToMotion(){
  var point = camMotion.getMovementPoint(true);
  console.log("motion detected at point:", point);
}
