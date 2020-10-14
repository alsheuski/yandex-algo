const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
let fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const str = fileLines[0];
let acc = [];
let max = 0;

for (let i = 0; i < str.length; i++) {
  let j = i;

  while (acc.indexOf(str[j]) === -1 && j < str.length) {
    acc.push(str[j]);
    j++;
  }

  if (max < acc.length) {
    max = acc.length;
  }
  acc = [];
}

fs.writeFileSync(outputFilePath, max.toString(), "utf-8");
