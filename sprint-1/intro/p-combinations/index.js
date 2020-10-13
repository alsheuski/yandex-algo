const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const charsMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const originNums = file[0].split("");
const res = [];

let charsArray = originNums.map((i) => charsMap[i]);
const firstPack = charsArray.shift();

for (let i = 0; i < firstPack.length; i++) {
  res.push(...multiply(firstPack[i], [...charsArray]));
}

function multiply(a, arr) {
  let acc = [];
  let chars = arr.shift();

  for (let i = 0; i < chars.length; i++) {
    if (arr.length) {
      acc.push(...multiply(chars[i], [...arr]).map((i) => a + i));
    } else {
      acc.push(a + chars[i]);
    }
  }

  return acc;
}

fs.writeFileSync(outputFilePath, res.join(" "), "utf-8");
