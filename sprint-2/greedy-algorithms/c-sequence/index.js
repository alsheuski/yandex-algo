const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const first =
  fileLines[0].length > fileLines[1].length ? fileLines[0] : fileLines[1];
const second =
  fileLines[0].length > fileLines[1].length ? fileLines[1] : fileLines[0];

function solution() {
  let pointer = 0;

  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[pointer]) {
      pointer++;
    }
  }

  return second.length === pointer;
}

fs.writeFileSync(outputFilePath, solution() ? "True" : "False", "utf-8");
