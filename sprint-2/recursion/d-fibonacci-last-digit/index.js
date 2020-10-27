const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const num = +fileLines[0];

function solution() {
  let res;
  let a = 0;
  let b = 1;

  for (let i = 0; i < num; i++) {
    res = (a + b) % 10;
    a = b;
    b = res;
  }

  return res;
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
