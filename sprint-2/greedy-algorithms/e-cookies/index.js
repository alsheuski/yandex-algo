const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const kidsCount = +fileLines[0];
const greedyFactors = fileLines[1]
  .split(" ")
  .map((i) => +i)
  .sort((a, b) => b - a);
const cookiesCount = +fileLines[2];
const cookies = fileLines[3]
  .split(" ")
  .map((i) => +i)
  .sort((a, b) => b - a);

function solution() {
  let res = [];

  for (let i = 0; i < kidsCount; i++) {
    if (greedyFactors[i] <= cookies[0]) {
      res.push(cookies.splice(0, 1));
    }
  }

  return res.length;
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
