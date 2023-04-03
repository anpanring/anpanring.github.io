function setup() {
    createCanvas(windowWidth, 100); // (0, 0) starts at top left
}
  
function draw() {
    let x = 30;
    background('white');
    textAlign(CENTER, CENTER);
    text('JACK', width/2, height/2);
    triangle(5, height/2, width/2-x, height/4, width/2-x, height*(3/4));
    triangle(width-5, height/2, width/2+x, height/4, width/2+x, height*(3/4));
}

function windowResized() {
    resizeCanvas(windowWidth, 100);
}