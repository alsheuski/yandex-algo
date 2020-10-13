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

describe("O. And again Vasia", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it("'1 2 3 0 0 0/3/3/2 5 6' should return '1 2 2 3 5 6'", async () => {
    const input = "1 2 3 0 0 0\n3\n3\n2 5 6";
    const expected = "1 2 2 3 5 6";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it("'8 98 0/2/1/65' should return '8 65 98'", async () => {
    const input = "8 98 0\n2\n1\n65";
    const expected = "8 65 98";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
