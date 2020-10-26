const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const rows = +fileLines[0];
const cols = +fileLines[1];
const data = fileLines.splice(2, rows);

function solution() {
  let res = 0;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (data[i + 1] && data[i][j] > data[i + 1][j]) {
        res++;
        break;
      }
    }
  }

  return res;
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
