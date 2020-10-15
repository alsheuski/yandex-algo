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

describe("J. Stack max effective", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'10\npop\npop\npush 4\npush -5\npush 7\npop\npop\nget_max\npop\nget_max' should return 'error\nerror\n4\nNone'`, async () => {
    const input = `10\npop\npop\npush 4\npush -5\npush 7\npop\npop\nget_max\npop\nget_max`;
    const expected = `error\nerror\n4\nNone`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'10\nget_max\npush -6\npop\npop\nget_max\npush 2\nget_max\npop\npush -2\npush -6' should return 'None\nerror\nNone\n2'`, async () => {
    const input = `10\nget_max\npush -6\npop\npop\nget_max\npush 2\nget_max\npop\npush -2\npush -6`;
    const expected = `None\nerror\nNone\n2`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
