const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const num = +file[0];
const degrees = [4];
let res = false;

if (num > 4) {
  while (degrees[degrees.length - 1] < 10000) {
    const last = degrees[degrees.length - 1];
    degrees.push(last * 4);
  }
}

if (num === 1 || degrees.indexOf(num) !== -1) {
  res = true;
}

fs.writeFileSync(outputFilePath, res ? "True" : "False", "utf-8");
