let allTrees = [];
const maxBranchNumber = 2;
const branchAngleOffset = 10;

function setup() {
  createCanvas(400, 400);
  background(51);
  for (let i = 0; i < 20; i++) {
    let r = random(width);
    generateTree(r);
  }
}

function draw() {
  for (let i = 0; i < allTrees.length; i++) {
    for (let q = 0; q < allTrees[i].length; q++) {
      // tree[i].jitter();
      allTrees[i][q].show();
    }
  }
}

function generateTree(xPos) {
  let newTree = [];
  let randomTrunkHeight = random(50);
  let randomTrunkWidth = random(5);
  let a = createVector(xPos, height);
  let b = createVector(xPos, height - (randomTrunkHeight + 50));
  let root = new Branch(a, b, randomTrunkWidth + 5);
  newTree.push(root);
  for (let i = 0; i < 8; i++) {
    generateBranches(newTree);
  }
  allTrees.push(newTree);
}

function generateBranches(treeArray) {
  for (let i = treeArray.length - 1; i >= 0; i--) {
    if (!treeArray[i].finished) {
      for (let q = 0; q < random(maxBranchNumber) + 1; q++) {
        treeArray.push(
          treeArray[i].branch(generateAngle(), treeArray[i].strokeWeight * 0.67)
        );
      }
      treeArray[i].finished = true;
    }
  }
}

function generateAngle() {
  let divisor = random(2) + branchAngleOffset;
  if (random() > 0.5) {
    return PI / divisor;
  }
  return -PI / divisor;
}
