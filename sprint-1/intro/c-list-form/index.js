const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const firstNum = parseInt(fileLines[1].split(" ").join(""), 10);
const secondNum = parseInt(fileLines[2], 10);

const result = (firstNum + secondNum).toString().split("").join(" ");

fs.writeFileSync(outputFilePath, result, "utf-8");
