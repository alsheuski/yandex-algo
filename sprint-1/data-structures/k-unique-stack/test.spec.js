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

describe("K. Unique stack", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'8\npush 1\npush 2\nsize\npush 2\nsize\npop\npush 1\nsize' should return '2\n2\n1'`, async () => {
    const input = `8\npush 1\npush 2\nsize\npush 2\nsize\npop\npush 1\nsize`;
    const expected = `2\n2\n1`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'10\npush 1\npop\npush 2\nsize\npush 1\npush 2\npop\npush 2\npeek\npop' should return '1\n2'`, async () => {
    const input = `10\npush 1\npop\npush 2\nsize\npush 1\npush 2\npop\npush 2\npeek\npop'`;
    const expected = `1\n2`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
