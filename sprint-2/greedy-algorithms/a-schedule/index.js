const fs = require("fs");
const path = require("path");
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const fileLines = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const lessonsCount = +fileLines[0];

function solution() {
  const res = [];
  const lessons = fileLines
    .splice(1, lessonsCount)
    .map((item) => item.split(" "))
    .sort((a, b) => {
      const index = a[1] !== b[1] ? 1 : 0;

      return parseFloat(a[index]) - parseFloat(b[index]);
    });

  let currentLesson;

  for (let i = 0; i < lessons.length; i++) {
    if (i === 0) {
      currentLesson = lessons[i];
      res.push(currentLesson);
    } else {
      if (parseFloat(lessons[i][0]) >= parseFloat(currentLesson[1])) {
        currentLesson = lessons[i];
        res.push(currentLesson);
      }
    }
  }

  return res.length + "\n" + res.map((item) => item.join(" ")).join("\n");
}

fs.writeFileSync(outputFilePath, solution(), "utf-8");
