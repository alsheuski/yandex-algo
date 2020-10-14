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

describe("A. Circles", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'8\nвышивание крестиком\nрисование мелками на парте\nнастольный керлинг\nнастольный керлинг\nкухня африканского племени ужасмай\nтяжелая атлетика\nтаракановедение\nтаракановедение' should return 'вышивание крестиком\nрисование мелками на парте\nнастольный керлинг\nкухня африканского племени ужасмай\nтяжелая атлетика\nтаракановедение'`, async () => {
    const input = `8\nвышивание крестиком\nрисование мелками на парте\nнастольный керлинг\nнастольный керлинг\nкухня африканского племени ужасмай\nтяжелая атлетика\nтаракановедение\nтаракановедение`;
    const expected = `вышивание крестиком\nрисование мелками на парте\nнастольный керлинг\nкухня африканского племени ужасмай\nтяжелая атлетика\nтаракановедение`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
