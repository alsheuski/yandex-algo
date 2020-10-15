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

describe("I. Stack max", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'8\nget_max\npush 7\npop\npush -2\npush -1\npop\nget_max\nget_max' should return 'None\n-2\n-2'`, async () => {
    const input = `8\nget_max\npush 7\npop\npush -2\npush -1\npop\nget_max\nget_max`;
    const expected = `None\n-2\n-2`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'7\nget_max\npop\npop\npop\npush 10\nget_max\npush -9' should return 'None\nerror\nerror\nerror\n10'`, async () => {
    const input = `7\nget_max\npop\npop\npop\npush 10\nget_max\npush -9`;
    const expected = `None\nerror\nerror\nerror\n10`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
