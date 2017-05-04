/*
 * Source: https://p5js.org/examples/math-sine-wave.html
*/

var colors = []; // Array of colors
var mySound;

var numberOfWaves = 3;
var waves = [];  // Using an array or arrays to store height values for each wave



var xspacing = 8;    // Distance between each horizontal location
var W;                // Width of entire wave
var THETA = 0.0;      // Start angle at 0
var AMPLITUDE = 90.0; // Height of wave
var PERIOD = 250.0;   // How many pixels before the wave repeats
var DX;               // Value for incrementing x
var MARGIN = 200; // space between waves






function preload (){
  setupSound(); // TODO: uncomment function code!
}

function setup() {
  setupColors();
  playSound();// TODO: uncomment function code!
  frameRate(10);


  createCanvas(window.outerWidth, window.outerHeight); // fills browser window
  W = width+16;
  DX = (TWO_PI / PERIOD) * xspacing;

  for(var i=0; i<numberOfWaves; i++){
    // build up an array of waves with different initial configuration values;
    waves.push({
      values: new Array(floor(W/xspacing)),
      theta: random(0,2), //THETA: give each wave a random starting point
      amplitude: random(10, AMPLITUDE),
      period: random(10, PERIOD),
      dx: DX
    })
  }
}

function draw() {
  background(0)
  for(var i=0; i<waves.length; i++){
    calcWave(waves[i]);
    renderWave(waves[i], i);
  }
}

function calcWave(wave) {
  // Increment theta (try different values for
  // 'angular velocity' here)
  wave.theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = wave.theta;
  for (var i = 0; i < wave.values.length; i++) {
    wave.values[i] = sin(x)*wave.amplitude;
    x+=wave.dx;
  }
}

function renderWave(wave, offset) {
  var leftSpacing = offset*MARGIN;
  noStroke();
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < wave.values.length; x++) {
    fill(randColor());
    ellipse(leftSpacing+height/2+wave.values[x], x*xspacing, random(1,6));
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
