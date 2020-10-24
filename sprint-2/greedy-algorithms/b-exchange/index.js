const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const count = +fileLines[0];
const shares = fileLines[1].split(" ").map((i) => parseInt(i, 10));

function solution() {
  let res = 0;

  for (let i = 0; i < count; i++) {
    if (shares[i + 1] && shares[i] <= shares[i + 1]) {
      res += shares[i + 1] - shares[i];
    }
  }

  return res;
}

fs.writeFileSync(outputFilePath, solution().toString(), "utf-8");
