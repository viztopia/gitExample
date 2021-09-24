let synth;

function setup() {
  createCanvas(400, 400);
  synth = new p5.Oscillator();
  synth.setType('sawtooth');
  synth.freq(200);
  synth.amp(0);
  synth.start();
}

function draw() {
  background(220);
  text("click to start sound. mouseX controls frequency. mouseY controls decay time.",
      50, 50, 200, 100);
  synth.freq(
    map(mouseX, 0, width, 50, 1000));
}

function mousePressed() {
  synth.amp(0.1, map(mouseY, 0, height, 0, 2));
}

function mouseReleased() {
  synth.amp(0, map(mouseY, 0, height, 0, 2));
}