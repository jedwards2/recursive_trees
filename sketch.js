let tree = [];

function setup() {
  createCanvas(400, 400);
  background(51);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 100);
  let root = new Branch(a, b, 10);
  tree[0] = root;
  for (let i = 0; i < 8; i++) {
    generateBranches();
  }
}

function draw() {
  for (let i = 0; i < tree.length; i++) {
    // tree[i].jitter();
    tree[i].show();
  }
}

function generateBranches() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      for (let q = 0; q < random(6) + 1; q++) {
        tree.push(tree[i].branch(generateAngle(), tree[i].strokeWeight * 0.67));
      }
      tree[i].finished = true;
    }
  }
}

function generateAngle() {
  let divisor = random(5) + 3;
  if (random() > 0.5) {
    return PI / divisor;
  }
  return -PI / divisor;
}
