const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);

let text = file[0];
let res = text.split("");
let map = {};

for (let i = 0; i < text.length; i++) {
  const j = map[text[i]];

  map[text[i]] = j ? j + 1 : 1;
}

fs.writeFileSync(
  outputFilePath,
  res
    .sort((a, b) => {
      if (map[b] === map[a]) {
        return a.charCodeAt(0) - b.charCodeAt(0);
      } else {
        return map[b] - map[a];
      }
    })
    .join(""),
  "utf-8"
);
