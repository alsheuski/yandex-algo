// run id 37283616
const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const commandsCount = +fileLines[0];

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    } else {
      return "error";
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  put(item) {
    this.s1.push(item);
  }

  get() {
    if (!this.s2.size()) {
      while (this.s1.size()) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }

  getSize() {
    return this.s1.size() + this.s2.size();
  }
}

function solution() {
  const res = [];
  const queue = new Queue();

  for (let i = 1; i <= commandsCount; i++) {
    const operand = fileLines[i].split(" ");

    switch (operand[0]) {
      case "get_size": {
        res.push(queue.getSize());
        break;
      }
      case "get": {
        res.push(queue.get());
        break;
      }
      case "put": {
        queue.put(operand[1]);
        break;
      }
    }
  }

  return res;
}

fs.writeFileSync(outputFilePath, solution().join("\n"), "utf-8");
