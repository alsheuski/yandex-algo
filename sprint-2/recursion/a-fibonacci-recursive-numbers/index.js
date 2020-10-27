const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const num = +fileLines[0];

function fib(n) {
  if (n < 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

function solution() {
  return fib(num);
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
