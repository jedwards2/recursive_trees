class Branch {
  constructor(begin, end, strokeWeight) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.strokeWeight = strokeWeight;
  }

  show() {
    stroke(255);
    strokeWeight(this.strokeWeight);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  branch(angle, strokeWeight) {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(angle);
    let branchLength = random(1);
    dir.mult(branchLength);
    let newEnd = p5.Vector.add(this.end, dir);

    let right = new Branch(this.end, newEnd, strokeWeight);
    return right;
  }

  jitter() {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }
}
