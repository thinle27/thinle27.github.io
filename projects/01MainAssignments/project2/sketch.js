let num = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(220);
}

function draw() {
  background(0, 0, 0);

	
  for (let y = 0; y < height; y += height / num) {
    drawingContext.save();
    noStroke();
    fill(0, 0, 255);
    rect(0, y, width, height / num);
    drawingContext.clip();
		
		push();
		fill(255, 245, 238);
		textFont('koshy');
		text("ZHdK", width / 2, height / 2 * tan(frameCount * 0.03 + 1 * noise(y)));
		pop();
		push();
		fill('white');
		textFont('Lobster');
		text("ZHdK", width / 2, height / 2 + 50 * tan(frameCount * 0.03 + 1 * noise(y)));
		pop();
		push();
		fill(250, 249, 246);
		textFont('roboto');
		text("ZHdK", width / 2, height / 2 + 30 * tan(frameCount * 0.03 + 1.5 * noise(y)));
		pop();
    drawingContext.restore();
  }
}