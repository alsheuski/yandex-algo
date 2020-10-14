const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const res = [];

for (let i = 1; i < fileLines.length; i++) {
  if (res.indexOf(fileLines[i]) === -1) {
    res.push(fileLines[i]);
  }
}

fs.writeFileSync(outputFilePath, res.join("\n"), "utf-8");
