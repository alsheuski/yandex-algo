const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const arr = fileLines[0].split(" ");
const amount = fileLines[1];
const map = {};
const result = [];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (map[item]) {
    map[item] = map[item] + 1;
  } else {
    map[item] = 1;
  }
}

for (let i in map) {
  result.push([i, map[i]]);
}

result.sort((a, b) => b[1] - a[1]);

fs.writeFileSync(
  outputFilePath,
  result
    .splice(0, amount)
    .map((item) => item[0])
    .join(" "),
  "utf-8"
);
