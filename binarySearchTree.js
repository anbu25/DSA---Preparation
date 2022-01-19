class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    let currentNode = this.root;
    if (!currentNode) {
      this.root = node;
    }
    else {
      while (currentNode) {
        if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        } else {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        }
      }
    }
  }

  lookup(value) {
    if(this.root){
      let currentNode = this.root;
      while(currentNode){
        if(currentNode.value === value){
          return currentNode;
        } else if (value > currentNode.value ) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    } else {
      return null;
    }
  }

  remove (value){
    let currentNode = this.root;
    let prevNode= null;
    while(currentNode){
      if(currentNode.value === value ){
        
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))


tree.lookup(6)