const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const firstArr = file[0].split(" ");
const firstNums = +file[1];
const secondNums = +file[2];
const secondArr = file[3].split(" ");

let pointer = 0;

firstArr.splice(firstNums, secondNums);

for (let i = 0; i < firstArr.length; i++) {
  if (+firstArr[i] >= +secondArr[pointer]) {
    firstArr.splice(i, 0, secondArr[pointer]);
    pointer++;
  }
}

if (pointer < secondNums) {
  for (let i = pointer; i < secondNums; i++) {
    firstArr.push(secondArr[i]);
  }
}

fs.writeFileSync(outputFilePath, firstArr.join(" "), "utf-8");
