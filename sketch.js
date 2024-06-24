function setup() {
    // createCanvas(windowWidth, 200); // (0, 0) starts at top left
    createCanvas(windowWidth/2, windowHeight/2);
    // noStroke();
    // noLoop();
    
    slider = createSlider(0, 6, 1, 1);
    slider.position(10, 70);
    slider.size(80);
}

function draw() {
    // let x = 30;
    // let thickness = 2;
    // background('white');
    // textAlign(CENTER, CENTER);
    // text('JACK', width/2, height/2);
    // triangle(5, height/2, width/2-x, height/4, width/2-x, height*(3/4));
    // triangle(width-5, height/2, width/2+x, height/4, width/2+x, height*(3/4));
    let g = slider.value();
    fill('green')
    background(g);
    drawCircle(width / 2, height / 2, height*1.5/4, g);
    textAlign(LEFT, CENTER);
    text(`level: ${g}`, 30, 50);
    text('beep', 30, 70);
}

function drawCircle(x, y, radius, level) {
    const tt = (80 * level) / 2;
    fill(tt, 100, 5);

    // x coord, y coord, width, height
    ellipse(x, y, radius * 2, radius * 2);
    fill('green')
    textAlign(CENTER, CENTER);
    // text(radius, x, height / 2);
    if (level > 1) {
        level = level - 1;
        drawCircle(x - radius / 2, y - radius / 2, radius / 2, level);
        drawCircle(x + radius / 2, y - radius / 2, radius / 2, level);
        drawCircle(x + radius / 2, y + radius / 2, radius / 2, level);
        drawCircle(x - radius / 2, y + radius / 2, radius / 2, level);
    }
}

// function windowResized() {
//     resizeCanvas(windowWidth, 100);
// }