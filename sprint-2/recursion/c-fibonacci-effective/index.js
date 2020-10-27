const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const num = +fileLines[0];

function solution() {
  let res = [0];

  for (let i = 0; i <= num; i++) {
    if (!res[i - 1]) {
      res.push(1);
    } else {
      res.push(res[i] + res[i - 1]);
    }
  }

  return res.pop();
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
