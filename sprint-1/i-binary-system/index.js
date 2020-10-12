const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

let first = file[0];
let second = file[1];
let extra = 0;
let res = "";

while (first || second || extra) {
  let tmp = +first.slice(-1) + +second.slice(-1) + extra;

  if (tmp === 3) {
    res = "1" + res.toString();
    extra = 1;
  } else if (tmp === 2) {
    res = "0" + res.toString();
    extra = 1;
  } else {
    res = tmp.toString() + res.toString();
    extra = 0;
  }

  first = first.slice(0, -1);
  second = second.slice(0, -1);
}

if (extra) {
  res = extra + res;
}

fs.writeFileSync(outputFilePath, res, "utf-8");
