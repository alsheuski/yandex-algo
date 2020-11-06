const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const char = fileLines[0];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function solution(c) {
  if (c === alphabet[0]) {
    return c;
  }

  const prevLetter = alphabet[alphabet.indexOf(c) - 1];

  return `${solution(prevLetter)} ${c}`;
}

fs.writeFileSync(outputFilePath, solution(char), "utf-8");
