const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

let first = file[0];
let second = file[1];
let res = "";
let map = {};

for (let i = 0; i < second.length; i++) {
  const j = map[second[i]];

  map[second[i]] = j ? j + 1 : 1;
}

for (let i = 0; i < first.length; i++) {
  const j = map[first[i]];

  if (j === 1) {
    delete map[first[i]];
  } else {
    map[first[i]] = j - 1;
  }
}

res = Object.keys(map)[0];

fs.writeFileSync(outputFilePath, res, "utf-8");
