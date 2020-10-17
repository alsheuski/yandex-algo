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
    if (this.size()) {
      return this.items[this.items.length - 1];
    } else {
      return "error";
    }
  }

  size() {
    return this.items.length;
  }
}

class StackSet extends Stack {
  constructor() {
    super();
    this.map = {};
  }

  pop() {
    if (this.size()) {
      const pop = this.items.pop();
      delete this.map[pop];

      return pop;
    } else {
      return "error";
    }
  }

  push(item) {
    if (!this.map[item]) {
      this.items.push(item);

      this.map[item] = true;
    }
  }
}

function solution() {
  const res = [];
  const stack = new StackSet();

  for (let i = 1; i <= commandsCount; i++) {
    switch (fileLines[i]) {
      case "pop": {
        if (stack.pop() === "error") {
          res.push("error");
        }
        break;
      }
      case "peek": {
        res.push(stack.peek());
        break;
      }
      case "size": {
        res.push(stack.size());
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
