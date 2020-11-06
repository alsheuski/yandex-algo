const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const num = +fileLines[0];

function factorial(n) {
  let res = 1;

  for (let i = 1; i <= num; i++) {
    res *= i;
  }

  return res;
}

function solution() {
  return factorial(num);
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
