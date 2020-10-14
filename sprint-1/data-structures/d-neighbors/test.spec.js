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

describe("D. Neighbors", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'4\n3\n1 2 3\n0 2 6\n7 4 1\n2 7 0\n3\n0' should return '7 7'`, async () => {
    const input = `4\n3\n1 2 3\n0 2 6\n7 4 1\n2 7 0\n3\n0`;
    const expected = `7 7`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'4\n3\n1 2 3\n0 2 6\n7 4 1\n2 7 0\n0\n0' should return '0 2'`, async () => {
    const input = `4\n3\n1 2 3\n0 2 6\n7 4 1\n2 7 0\n0\n0`;
    const expected = `0 2`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
