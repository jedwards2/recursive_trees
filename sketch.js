let tree = [];

function setup() {
  createCanvas(400, 400);

  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 100);
  let root = new Branch(a, b);
  tree[0] = root;
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
      tree[i].finished = true;
    }
  }
}

function draw() {
  background(51);
  for (let i = 0; i < tree.length; i++) {
    tree[i].jitter();
    tree[i].show();
  }
}
