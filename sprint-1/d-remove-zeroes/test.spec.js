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

describe("D. Remove zeroes", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it("'8/-1 0 0 1 2 -1 -4 0' should return '-1 1 2 -1 -4'", async () => {
    const input = "8\n-1 0 0 1 2 -1 -4 0";
    const expected = "-1 1 2 -1 -4";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it("'5/-1 1 2 -1 -4' should return '-1 1 2 -1 -4'", async () => {
    const input = "5\n-1 1 2 -1 -4";
    const expected = "-1 1 2 -1 -4";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
