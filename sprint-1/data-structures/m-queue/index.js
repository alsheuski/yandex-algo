const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
let fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const commandsCount = +fileLines[0];

class Queue {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.shift();
    } else {
      return "error";
    }
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

function solution() {
  const res = [];
  const queue = new Queue();

  for (let i = 1; i <= commandsCount; i++) {
    switch (fileLines[i]) {
      case "size": {
        res.push(queue.size());
        break;
      }
      case "pop": {
        res.push(queue.pop());
        break;
      }
      case "peek": {
        res.push(queue.peek());
        break;
      }
      default:
        const num = fileLines[i].split(" ")[1];
        queue.push(num);
        break;
    }
  }

  return res;
}

fs.writeFileSync(outputFilePath, solution().join("\n"), "utf-8");
