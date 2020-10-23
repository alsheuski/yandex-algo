const path = require("path");
const fs = require("fs");
const vm = require("vm");
const sinon = require("sinon");
const solution = fs.readFileSync(path.join(__dirname, "index.js"), "utf-8");

function executeSolution() {
  vm.runInContext(
    solution,
    vm.createContext({ require: require, __dirname: __dirname })
  );
}

describe("S2. Greedy algorithms. A. Schedule", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'5\n9 10\n9.3 10.3\n10 11\n10.3 11.3\n11 12' should return '3\n9 10\n10 11\n11 12'`, async () => {
    const input = `5\n9 10\n9.3 10.3\n10 11\n10.3 11.3\n11 12`;
    const expected = `3\n9 10\n10 11\n11 12`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'3\n9 10\n11 12.25\n12.15 13.3' should return '2\n9 10\n11 12.25'`, async () => {
    const input = `3\n9 10\n11 12.25\n12.15 13.3`;
    const expected = `2\n9 10\n11 12.25`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'7\n19 19\n7 14\n12 14\n8 22\n22 23\n5 21\n9 23' should return '3\n7 14\n19 19\n22 23'`, async () => {
    const input = `7\n19 19\n7 14\n12 14\n8 22\n22 23\n5 21\n9 23`;
    const expected = `3\n7 14\n19 19\n22 23`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
