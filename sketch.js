//the data comes from:https://personalitymax.com/personality-types/population-gender/

let circles = [];
let colors = ["#5DC9EE", "#F4BE3A", "#81BB7D", "#BB7DA9"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 16; i++) {
    let size;
    if (i < 4) {
      size = random(150, 200);
    } else if (i < 8) {
      size = random(100, 150);
    } else if (i < 12) {
      size = random(75, 100);
    } else {
      size = random(50, 75);
    }
    
    let color = colors[floor(i / 4)];
    let c = new Circle(random(width), random(height), size, color);
    circles.push(c);
  }
}

function draw() {
   background(255);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.update();
    c.display();
  }
  
  let hoveredCircle = getHoveredCircle();
  if (hoveredCircle) {
    hoveredCircle.displayText();
  }
}

class Circle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }
  
  display() {
    noStroke();
    fill(color(this.color), 127);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  displayText() {
    let x = this.x;
    let y = this.y;
    let textX = x - (this.size / 4);
    let textY = y + (this.size / 4);
    
    fill(color("#21618C"));
    textAlign(CENTER, CENTER);
    textSize(16);
    
    if (this.color === "#5DC9EE") {
      text("ESFJ 12%", textX, textY);
    } else if (this.color === "#5DC9EE") {
      text("ISFJ 13.8%", textX, textY);
    } else if (this.color === "#5DC9EE") {
      text("ISTJ 11.6%", textX, textY);
    }else if (this.color === "#F4BE3A") {
      text("ISFP 8.8%", textX, textY);
    }else if (this.color === "#81BB7D") {
      text("INFJ 1.5%", textX, textY);
    }else if (this.color === "#BB7DA9") {
      text("INTJ 2.1%", textX, textY);
    }
  }
}

function getHoveredCircle() {
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
let distance = dist(mouseX, mouseY, c.x, c.y);
if (distance < c.size / 2) {
return c;
}
}
return null;
}

function mouseMoved() {
let hoveredCircle = getHoveredCircle();
if (hoveredCircle) {
fill(color("#21618C"));
textAlign(CENTER, CENTER);
textSize(20);
if (hoveredCircle.color === "#5DC9EE") {
text("ISFJ 13.8%", hoveredCircle.x, hoveredCircle.y);
} else if (hoveredCircle.color === "#5DC9EE") {
text("ESFJ 12%", hoveredCircle.x, hoveredCircle.y);
}else if (hoveredCircle.color === "#F4BE3A") {
text("ISTJ 11.6%", hoveredCircle.x, hoveredCircle.y);
}else if (hoveredCircle.color === "#5DC9EE") {
text("ISFP 8.8%", hoveredCircle.x, hoveredCircle.y);
}else if (hoveredCircle.color === "#5DC9EE") {
text("ISFP 8.8%", hoveredCircle.x, hoveredCircle.y);
}else if (hoveredCircle.color === "#81BB7D") {
text("INFJ 1.5%", hoveredCircle.x, hoveredCircle.y);
}else if (hoveredCircle.color === "#BB7DA9") {
text("INTJ 2.1%", hoveredCircle.x, hoveredCircle.y);
}
}
}








