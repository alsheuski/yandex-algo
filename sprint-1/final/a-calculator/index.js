// run id 37278665
const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const chars = fileLines[0].split(" ");

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

function calculate(a, operator, b) {
  switch (operator) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
    case "/": {
      return Math.floor(a / b);
    }
  }
}

function solution() {
  const stack = new Stack();

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (Number.isInteger(+char)) {
      stack.push(char);
    } else {
      if (stack.size() > 1) {
        const b = stack.pop();
        const a = stack.pop();

        stack.push(calculate(+a, char, +b));
      } else {
        return -1;
      }
    }
  }

  return stack.peek();
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
