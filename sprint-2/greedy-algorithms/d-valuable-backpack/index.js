const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
let volume = +fileLines[0];
const count = +fileLines[1];
const things = fileLines
  .splice(2, fileLines.length - 1)
  .map((item, index) => {
    const a = item.split(" ").map((i) => +i);
    a.push(index);

    return a;
  })
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

function solution() {
  let res = [];

  for (let i = 0; i < count; i++) {
    const thing = things[i];

    if (thing[1] <= volume) {
      res.push(thing[2]);
      volume -= thing[1];
    }
  }

  return res.sort((a, b) => a - b).join(" ");
}

fs.writeFileSync(outputFilePath, solution(), "utf-8");
