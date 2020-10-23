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

describe("M.Queue", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'10\nsize\npush 0\npop\npush 2\nsize\npush -2\npop\npush -8\npush 4\npush 6' should return '0\n0\n1\n2'`, async () => {
    const input = `10\nsize\npush 0\npop\npush 2\nsize\npush -2\npop\npush -8\npush 4\npush 6`;
    const expected = `0\n0\n1\n2`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'10\npush 4\npop\npush -1\nsize\npush 0\nsize\npush -4\nsize\npop\npeek' should return '4\n1\n2\n3\n-1\n0'`, async () => {
    const input = `10\npush 4\npop\npush -1\nsize\npush 0\nsize\npush -4\nsize\npop\npeek`;
    const expected = `4\n1\n2\n3\n-1\n0`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
