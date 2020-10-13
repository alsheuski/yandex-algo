const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const length = +file[0];
const arr = file[1].split(" ");
const map = {};
let res;

for (let i = 0; i < length; i++) {
  const j = map[arr[i]];

  map[arr[i]] = j ? j + 1 : 1;
}

for (k in map) {
  if (map[k] !== 2) {
    res = k;
    break;
  }
}

fs.writeFileSync(outputFilePath, res, "utf-8");
