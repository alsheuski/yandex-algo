const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const num = +fileLines[0];

function fib(n, map) {
  if (n < 2) {
    return 1;
  }

  if (!map) {
    map = {};
  }

  let n1;
  let n2;

  if (map[n - 1]) {
    n1 = map[n - 1];
  } else {
    n1 = fib(n - 1, map);
    map[n - 1] = n1;
  }

  if (map[n - 2]) {
    n2 = map[n - 2];
  } else {
    n2 = fib(n - 2, map);
    map[n - 2] = n2;
  }

  return n1 + n2;
}

function solution() {
  return fib(num);
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
