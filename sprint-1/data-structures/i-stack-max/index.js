const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
let fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const commandsCount = +fileLines[0];

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return !!this.items.length;
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

class StackMax extends Stack {
  get_max() {
    if (this.items.length) {
      return Math.max(...this.items);
    } else {
      return "None";
    }
  }
}

function solution() {
  const res = [];
  const stack = new StackMax();

  for (let i = 1; i <= commandsCount; i++) {
    switch (fileLines[i]) {
      case "get_max": {
        res.push(stack.get_max());
        break;
      }
      case "pop": {
        if (stack.pop() === "error") {
          res.push("error");
        }
        break;
      }
      default:
        const num = fileLines[i].split(" ")[1];
        stack.push(num);
        break;
    }
  }

  return res;
}

fs.writeFileSync(outputFilePath, solution().join("\n"), "utf-8");
