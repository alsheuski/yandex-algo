const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

const first = file[0];
const second = file[1];
const map = {};
let res;

if (first.length !== second.length) {
  res = false;
} else {
  for (let i = 0; i < first.length; i++) {
    if (map[first[i]]) {
      map[first[i]] += 1;
    } else {
      map[first[i]] = 1;
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (map[second[i]]) {
      if (map[second[i]] < 2) {
        delete map[second[i]];
      } else {
        map[second[i]] -= 1;
      }
    } else {
      break;
    }
  }

  if (Object.keys(map).length) {
    res = false;
  } else {
    res = true;
  }
}

fs.writeFileSync(outputFilePath, res ? "True" : "False", "utf-8");
