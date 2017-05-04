/*
 * Source: https://p5js.org/examples/math-sine-wave.html
*/

var xspacing = 8;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 90.0; // Height of wave
var period = 250.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var waves = [];  // Using an array or arrays to store height values for each wave
var colors = []; // Array of colors
var mySound;
var numberOfWaves = 3;

function preload (){
  setupSound(); // TODO: uncomment function code!
}

function setup() {
  setupColors();
  playSound();// TODO: uncomment function code!
  frameRate(10);


  createCanvas(window.outerWidth, window.outerHeight); // fills browser window
  w = width+16;
  dx = (TWO_PI / period) * xspacing;

  while(numberOfWaves--){
    waves.push(new Array(floor(w/xspacing)))
  }
}

function draw() {
  background(0)
  for(var i=0; i<waves.length; i++){
    calcWave(waves[i], i);
    renderWave(waves[i], i);
  }
}

function calcWave(waves, offset) {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < waves.length; i++) {
    waves[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave(waves, offset) {
  var leftSpacing = offset*period;
  noStroke();
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < waves.length; x++) {
    fill(randColor());
    ellipse(leftSpacing+height/2+waves[x], x*xspacing, random(1,6));
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
  return colors[int(random(0, colors.length-1))];
}

// TODO: uncomment these when we're ready
function setupSound() {
  // mySound = loadSound('ASMR.mp3');
}
function playSound() {
  // mySound.setVolume(0.1);
  // mySound.play();
}
