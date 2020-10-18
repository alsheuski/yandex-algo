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

describe("C.Stack queue", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'5\nput -9\nget\nput -3\nput 2\nget_size' should return '-9\n2'`, async () => {
    const input = `5\nput -9\nget\nput -3\nput 2\nget_size`;
    const expected = `-9\n2`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'8\nput -7\nget\nput 1\nget\nput -2\nget\nput 2\nget_size' should return '-7\n1\n-2\n1'`, async () => {
    const input = `8\nput -7\nget\nput 1\nget\nput -2\nget\nput 2\nget_size`;
    const expected = `-7\n1\n-2\n1`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'9\nput -3\nput 0\nput 7\nput 4\nget_size\nput -4\nget_size\nget\nget_size' should return '4\n5\n-3\n4'`, async () => {
    const input = `9\nput -3\nput 0\nput 7\nput 4\nget_size\nput -4\nget_size\nget\nget_size`;
    const expected = `4\n5\n-3\n4`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
