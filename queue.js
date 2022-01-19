class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue (value) {
    const node = new Node(value);
    if(this.length === 0){
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue () {
    this.first = this.first.next;
    return this;
  }

  peek () { 
    return this.first;
  }

  isEmpty(){
    return this.length === 0;
  }

}

const myQueue = new Queue();

myQueue.enqueue('Apple')
myQueue.enqueue('Pomi')
myQueue.enqueue('Mango')
myQueue.enqueue('Gado')
myQueue.enqueue('Seeth')
myQueue.dequeue()


console.log(myQueue.peek())