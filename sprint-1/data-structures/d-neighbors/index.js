const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
let lines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const n = +lines[0];
const m = +lines[1];
const y = +lines[n + 2];
const x = +lines[n + 3];
const neighbors = [];

lines.splice(0, 2);
lines.splice(n, 2);

lines = lines.map((line) => line.split(" "));

if (y > 0) {
  neighbors.push(+lines[y - 1][x]);
}

if (y < n - 1) {
  neighbors.push(+lines[y + 1][x]);
}

if (x > 0) {
  neighbors.push(+lines[y][x - 1]);
}

if (x < m - 1) {
  neighbors.push(+lines[y][x + 1]);
}

fs.writeFileSync(
  outputFilePath,
  neighbors.sort((a, b) => a - b).join(" "),
  "utf-8"
);
