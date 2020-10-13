const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8");

let reminder = parseInt(file, 10);
let res = "";

while (reminder > 1) {
  res = (reminder % 2).toString() + res;
  reminder = Math.floor(reminder / 2);
}

fs.writeFileSync(outputFilePath, reminder.toString() + res, "utf-8");
