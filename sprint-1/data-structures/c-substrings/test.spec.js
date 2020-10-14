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

describe("C. Substrings", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'4\n3\n1 2 3\n0 2 6\n7 4 1\n2 7 0' should return '1 0 7 2\n2 2 4 7\n3 6 1 0'`, async () => {
    const input = `4\n3\n1 2 3\n0 2 6\n7 4 1\n2 7 0`;
    const expected = `1 0 7 2\n2 2 4 7\n3 6 1 0`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'9\n5\n-7 -1 0 -4 -9\n5 -1 2 2 9\n3 1 -8 -1 -7\n9 0 8 -8 -1\n2 4 5 2 8\n-7 10 0 -4 -8\n-3 10 -7 10 3\n1 6 -7 -5 9\n-1 9 9 1 9' should return '-7 5 3 9 2 -7 -3 1 -1\n-1 -1 1 0 4 10 10 6 9\n0 2 -8 8 5 0 -7 -7 9\n-4 2 -1 -8 2 -4 10 -5 1\n-9 9 -7 -1 8 -8 3 9 9'`, async () => {
    const input = `9\n5\n-7 -1 0 -4 -9\n5 -1 2 2 9\n3 1 -8 -1 -7\n9 0 8 -8 -1\n2 4 5 2 8\n-7 10 0 -4 -8\n-3 10 -7 10 3\n1 6 -7 -5 9\n-1 9 9 1 9`;
    const expected = `-7 5 3 9 2 -7 -3 1 -1\n-1 -1 1 0 4 10 10 6 9\n0 2 -8 8 5 0 -7 -7 9\n-4 2 -1 -8 2 -4 10 -5 1\n-9 9 -7 -1 8 -8 3 9 9`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
