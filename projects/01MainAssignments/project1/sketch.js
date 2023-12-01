let capture;
let tracker
let positions;
//let cookie;

function setup() {

  // load p5 functions:
  createCanvas(windowWidth, windowHeight);

  /*
  push();
  //cookie buffer
  cookie = createGraphics(windowWidth/2, windowHeight/2);
  cookie.fill(191, 134, 65);
  cookie.ellipse(windowWidth/2, windowHeight/2, 100, 100);
  cookie.ellipseMode(CENTER);
  cookie.noStroke();
  cookie.fill(44, 28, 20);
  for(let i = 0; i < 8; i++){
    ellipse(windowWidth/2 - random(-32, 32), windowHeight/2 - random(-32, 32), 10, 10);
    ellipse(windowWidth/2 - random(-32, 32), windowHeight/2 - random(-32, 32), 5, 5);
  }
  pop();
*/

  capture = createCapture(VIDEO);

  capture.size(500,500); 
  capture.hide();

  // load clmtrackr functions:
  tracker = new clm.tracker(); // create a new clmtrackr object
  tracker.init(); // initialize the object
  tracker.start(capture.elt); // start tracking the video element capture.elt

  /*
  slider = createSlider(0, 1, 0.5, smile * 5 );
  slider.position(windowWidth/2 - 150, windowHeight/2);
  slider.style('width', '200px');
  */
}

function draw() {

  background('white');

  positions = tracker.getCurrentPosition(); // updates the tracker with current positions

  // draw dots + numbers
  for (let i = 0; i < positions.length; i++) {
    noStroke();
    fill(1,117,255);
    ellipse(positions[i][0], positions[i][1], 4, 4);
  }
    if (positions.length > 0) {
      let mouthLeft = createVector(positions[47][0], positions[47][1]);
      let mouthRight = createVector(positions[53][0], positions[53][1]);
      let smile = mouthLeft.dist(mouthRight);
      
    // smile bar

    if(smile > 18){
      push();
      translate(windowWidth/2, windowHeight/2);
      fill(239,239,239);
      rect(20, 20, 250, 10, 20);
      fill(1,117,255);
      rect(20, 20,smile * 5, 10, 20);
      ellipse(smile * 5 + 23, 25, 15);
      pop(); 
    } else{
      translate(windowWidth/2, windowHeight/2);
      fill(239,239,239);
      rect(20, 20, 250, 10, 20);
      fill(1,117,255);
      ellipse(25, 25, 15);
      pop(); 
    }
    console.log(smile);
  }
} 