
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newObj = new Node(value);
    this.tail.next = newObj;
    this.tail = newObj
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    let printArray = [];
    let currentNode = this.head;
    while (currentNode) {
      printArray.push(currentNode.value)
      currentNode = currentNode.next;
    }
    return printArray;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      let newNode = new Node(value);
      let currentNode = this.traverseToNode(index - 1);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  traverseToNode(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode && count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previousNode = this.traverseToNode(index - 1);
      let currentNode = previousNode.next;
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.printList();
myLinkedList.reverse()

myLinkedList.printList();