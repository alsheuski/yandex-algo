const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
let fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const n = +fileLines[0];
const m = +fileLines[1];
fileLines.splice(0, 2);
fileLines = fileLines.map((line) => line.replace("\t\t", "").split(" "));

const res = [[]];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!res[j]) {
      res[j] = [];
    }
    res[j][i] = fileLines[i][j];
  }
}

fs.writeFileSync(
  outputFilePath,
  res.map((line) => line.join(" ")).join("\n"),
  "utf-8"
);
