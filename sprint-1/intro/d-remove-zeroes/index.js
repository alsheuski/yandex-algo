const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const arr = fileLines[1]
  .split(" ")
  .filter((i) => i !== "0")
  .join(" ");

fs.writeFileSync(outputFilePath, arr, "utf-8");
