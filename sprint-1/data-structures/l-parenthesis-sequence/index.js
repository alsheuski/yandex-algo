const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
let fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const parenthesis = fileLines[0];

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

  size() {
    return this.items.length;
  }
}

function is_correct_bracket_seq() {
  const stack = new Stack();
  let res = true;

  if (parenthesis.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < parenthesis.length; i++) {
    const char = parenthesis[i];

    if (isOpened(char)) {
      stack.push(char);
    } else {
      if (stack.isEmpty()) {
        return false;
      }

      if (!isSameType(char, stack.pop())) {
        return false;
      }
    }
  }

  if (!stack.isEmpty()) {
    return false;
  }

  return res;
}

function isOpened(char) {
  return "{[(".indexOf(char) !== -1;
}

function isSameType(char, popped) {
  switch (char) {
    case "}": {
      return popped === "{";
    }
    case "]": {
      return popped === "[";
    }
    case ")": {
      return popped === "(";
    }
    default:
      return false;
  }
}

fs.writeFileSync(
  outputFilePath,
  is_correct_bracket_seq() ? "True" : "False",
  "utf-8"
);
