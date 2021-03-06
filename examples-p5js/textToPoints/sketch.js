let font;
function preload() {
  // font = loadFont('../assets/inconsolata.otf');
  font = loadFont('../assets/ChunkFive-Regular.otf');
}

let points;
let bounds;

function setup() {
  createCanvas(400, 500);
  stroke(0);
  strokeWeight(1);

  // fill(255, 104, 204);
  fill('gray');
  let tsize = 100;
  let ttxt = 'B E';
  points = font.textToPoints(ttxt, 0, 0, tsize, {
    sampleFactor: 0.8,
    simplifyThreshold: 0,
  });
  bounds = font.textBounds(' ' + ttxt + ' ', 0, 0, tsize);
  // bounds = font.textBounds( ttxt , 0, 0, tsize);
  console.log('points.length', points.length);
  console.log('bounds', bounds);
}

let x_margin = 10;
let y_margin = 10;

function draw() {
  background(255);
  // beginShape();
  translate((-bounds.x * width) / bounds.w, (-bounds.y * height) / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let x = (p.x * width) / bounds.w;
    x += (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 200;
    x += x_margin;
    let y = (p.y * (height - y_margin)) / bounds.h;
    // y += y_margin;
    circle(x, y, 5);
  }
  // endShape(CLOSE);
}

// https://p5js.org/reference/#/p5.Font/textToPoints
// https://p5js.org/reference/#/p5.Font/textBounds
