const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const str = file[0].replace(/\W/g, "").toLocaleLowerCase();
let res = true;
let length = str.length;

for (let i = 0; i < length / 2; i++) {
  if (str[i] !== str[length - 1 - i]) {
    res = false;
  }
}

fs.writeFileSync(outputFilePath, res ? "True" : "False", "utf-8");
