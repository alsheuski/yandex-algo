const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const arr = file[1].split(" ");
const map = {};
let res;

for (let i = 0; i < arr.length; i++) {
  if (map[arr[i]]) {
    res = arr[i];
    break;
  } else {
    map[arr[i]] = arr[i];
  }
}

fs.writeFileSync(outputFilePath, res, "utf-8");
