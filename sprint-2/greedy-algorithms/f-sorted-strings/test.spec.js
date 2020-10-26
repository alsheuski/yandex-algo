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

describe("S2. Greedy algorithms. F. Sorted strings", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'3\n3\ncba\ndaf\nghi' should return '1'`, async () => {
    const input = `3\n3\ncba\ndaf\nghi`;
    const expected = `1`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'2\n1\na\nb' should return '0'`, async () => {
    const input = `2\n1\na\nb`;
    const expected = `0`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'7\n3\ntrk\nikv\njmb\nghj\nbnm\nmff\nxkr' should return '3'`, async () => {
    const input = `7\n3\ntrk\nikv\njmb\nghj\nbnm\nmff\nxkr`;
    const expected = `3`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
