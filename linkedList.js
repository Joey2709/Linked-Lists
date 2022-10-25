class LinkedList {
  constructor() {
    this.list = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.list === null) {
      this.list = newNode;
    } else {
      let now = this.list;
      while (now.nextNode !== null) {
        now = now.nextNode;
      }
      now.nextNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.list;
    this.list = newNode;
  }

  size() {
    let allNodes = this.list;
    let count = 0;
    let now = this.list;
    while (now.nextNode !== null) {
      now = now.nextNode;
      count++;
    }
    return count;
  }

  head() {
    return this.list.value;
  }

  tail() {
    let allNodes = this.list;

    while (allNodes.nextNode !== null) {
      allNodes = allNodes.nextNode;
    }
    return allNodes.value;
  }

  at(index) {
    let allNodes = this.list;
    let i = 0;
    while (i < index) {
      allNodes = allNodes.nextNode;
      i++;
    }
    return allNodes.value;
  }

  pop() {
    let allNodes = this.list;
    let i = 0;
    while (allNodes.nextNode !== null) {
      allNodes = allNodes.nextNode;
      i++;
    }
    let now = this.list;
    while (i > 1) {
      now = now.nextNode;
      i--;
    }
    now.nextNode = null;
  }

  contains(value) {
    let allNodes = this.list;
    if (allNodes.value == value) {
      return true;
    }
    while (allNodes.nextNode !== null) {
      if (allNodes.nextNode.value == value) {
        return true;
      }
      allNodes = allNodes.nextNode;
    }
    return false;
  }

  find(value) {
    let allNodes = this.list;
    let count = 0;
    if (allNodes.value == value) {
      return count;
    }
    while (allNodes.nextNode !== null) {
      if (allNodes.nextNode.value == value) {
        return count + 1;
      }
      allNodes = allNodes.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let allNodes = this.list;
    let str = `( ${this.list.value} ) `;
    while (allNodes.nextNode !== null) {
      str += `-> ( ${allNodes.nextNode.value} ) `;
      allNodes = allNodes.nextNode;
    }
    str += `-> ${null}`;
    return str;
  }

  /*additional*/
  insertAt(value, index) {
    let allNodes = this.list;
    let newNode = new Node(value);
    if (index == 0) {
      newNode.nextNode = this.list;
      this.list = newNode;
      return;
    }
    let i = 1;
    while (i < index) {
      allNodes = allNodes.nextNode;
      index--;
    }
    let aux = allNodes.nextNode;
    newNode.nextNode = aux;
    allNodes.nextNode = newNode;
  }

  removeAt(index) {
    let allNodes = this.list;
    let i = 1;
    if (index == 0) {
      let nodes = allNodes.nextNode;
      this.list = null;
      this.list = nodes;
      return;
    }
    while (i < index) {
      allNodes = allNodes.nextNode;
      index--;
    }
    let aux = allNodes.nextNode;
    allNodes.nextNode = null;
    allNodes.nextNode = aux.nextNode;
  }
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.append("d");
myLinkedList.append("e");
myLinkedList.append("e");
myLinkedList.append("a");
myLinkedList.append("n");
myLinkedList.append("a");
myLinkedList.insertAt("d", 0);
myLinkedList.removeAt(0);
myLinkedList.prepend("1");
myLinkedList.size();
myLinkedList.head();
myLinkedList.tail();
myLinkedList.at(0);
myLinkedList.pop();
myLinkedList.contains("d");
myLinkedList.find("e");
myLinkedList.toString();

console.log(myLinkedList);
