class Stack {
  constructor () {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push (value) {
    let node = {
      value: value,
      next: null
    };
    if(this.length === 0){
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
  }

  pop () {
    this.top = this.top.next;
    this.length--;
  }

  peek () {
    return this.top;
  }

  isEmpty () {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push('Apple');
myStack.push('Microsoft');
console.log(myStack)
myStack.pop();
console.log(myStack)
myStack.push('Facebook');
console.log(myStack)

myStack.peek();

console.log(myStack.isEmpty())