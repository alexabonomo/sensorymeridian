/*
 * Source: https://p5js.org/examples/math-sine-wave.html
*/

var bgimage;
var colors = []; // Array of colors
var mySound;

var numberOfWaves = 3;
var waves = [];  // Using an array or arrays to store height values for each wave



var yspacing = 8;     // Distance between each vertical location
var H;                // Height of entire wave
var THETA = 0.0;      // Start angle at 0
var AMPLITUDE = 90.0; // Height of wave
var PERIOD = 250.0;   // How many pixels before the wave repeats
var DY;               // Value for incrementing y
var MARGIN = 200; // space between waves

var WIDTH = 720;
var HEIGHT = 1280;




function preload (){
  setupSound(); // TODO: uncomment function code!
  bgimage = loadImage("backgroundtexture.jpg");
}

function setup() {
  setupColors();
  playSound();// TODO: uncomment function code!
  frameRate(10);


  createCanvas(720, 1280);
  H = HEIGHT+16;
  DY = (TWO_PI / PERIOD) * yspacing;

  for(var i=0; i<numberOfWaves; i++){
    // build up an array of waves with different initial configuration values;
    waves.push({
      values: new Array(floor(H/yspacing)),
      theta: random(0,2), //THETA: give each wave a random starting point
      amplitude: random(10, AMPLITUDE),
      period: random(10, PERIOD),
      dy: DY
    })
  }
}

function draw() {
  image(bgimage, 0, 0, WIDTH, HEIGHT)
  for(var i=0; i<waves.length; i++){
    calcWave(waves[i]);
    renderWave(waves[i]);
  }
}

function calcWave(wave) {
  // Increment theta (try different values for
  // 'angular velocity' here)
  wave.theta += 0.02;

  // For every y value, calculate a x value with sine function
  var y = wave.theta;
  for (var i = 0; i < wave.values.length; i++) {
    wave.values[i] = sin(y)*wave.amplitude;
    y+=wave.dy;
  }
}

function renderWave(wave) {
  noStroke();
  // A simple way to draw the wave with an ellipse at each location
  for (var y = 0; y < wave.values.length; y++) {
    fill(randColor());
    ellipse(WIDTH/2+wave.values[y], y*yspacing, random(1,6));
  }
}

function setupColors() {
  colors[0] = color(111,184,232);
  colors[1] = color(85,182,178);
  colors[2] = color(198,218,198);
  colors[3] = color(197,192,151);
  colors[4] = color(223,152,63);
}

function randColor() {
  return colors[int(random(0, colors.length))];
}

// TODO: uncomment these when we're ready
function setupSound() {
  // mySound = loadSound('ASMR.mp3');
}
function playSound() {
  // mySound.setVolume(0.1);
  // mySound.play();
}



// set browser window to full screen when canvas clicked in top left corner.
function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}
