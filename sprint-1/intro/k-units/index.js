const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

let num = +file[0];
let res = "";

while (num > 1) {
  res = (num % 2).toString() + res;
  num = Math.floor(num / 2);
}

res = num.toString() + res;

fs.writeFileSync(
  outputFilePath,
  res
    .split("")
    .filter((i) => i === "1")
    .length.toString(),
  "utf-8"
);
