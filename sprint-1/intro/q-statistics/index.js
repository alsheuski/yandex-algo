const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const file = fs.readFileSync(inputFilePath, "utf-8").split(/\r?\n/);
const length = +file[0];
const nums = file[1]
  .split(" ")
  .map((i) => +i)
  .sort((a, b) => a - b);

let res = -1;

if (length > 3) {
  // Bad solution because time limit with really long array of numbers
  // for (let i = 0; i < length; i++) {
  //   for (let j = i + 1; j < length; j++) {
  //     for (let k = j + 1; k < length; k++) {
  //       const a = nums[i];
  //       const b = nums[j];
  //       const c = nums[k];
  //       if (a + b + c !== 0) {
  //         continue;
  //       }
  //       const mult = a * b * c;
  //       if (mult > 0 && mult > res) {
  //         res = mult;
  //       }
  //     }
  //   }
  // }

  let left;
  let right;

  for (let i = 0; i < length; i++) {
    left = i + 1;
    right = length - 1;

    while (left < right) {
      const a = nums[i];
      const b = nums[left];
      const c = nums[right];

      const sum = a + b + c;

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        const mult = a * b * c;

        if (mult > res) {
          res = mult;
        }

        left++;
        right--;
      }
    }
  }
}

fs.writeFileSync(outputFilePath, res.toString(), "utf-8");
