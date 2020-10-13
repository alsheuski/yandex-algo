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

describe("P. Combinations", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it("'23' should return 'ad ae af bd be bf cd ce cf'", async () => {
    const input = "23";
    const expected = "ad ae af bd be bf cd ce cf";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it("'92' should return 'wa wb wc xa xb xc ya yb yc za zb zc'", async () => {
    const input = "92";
    const expected = "wa wb wc xa xb xc ya yb yc za zb zc";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it("'7884' should return 'pttg ptth ptti ptug ptuh ptui ptvg ptvh ptvi putg puth puti puug puuh puui puvg puvh puvi pvtg pvth pvti pvug pvuh pvui pvvg pvvh pvvi qttg qtth qtti qtug qtuh qtui qtvg qtvh qtvi qutg quth quti quug quuh quui quvg quvh quvi qvtg qvth qvti qvug qvuh qvui qvvg qvvh qvvi rttg rtth rtti rtug rtuh rtui rtvg rtvh rtvi rutg ruth ruti ruug ruuh ruui ruvg ruvh ruvi rvtg rvth rvti rvug rvuh rvui rvvg rvvh rvvi sttg stth stti stug stuh stui stvg stvh stvi sutg suth suti suug suuh suui suvg suvh suvi svtg svth svti svug svuh svui svvg svvh svvi'", async () => {
    const input = "7884";
    const expected =
      "pttg ptth ptti ptug ptuh ptui ptvg ptvh ptvi putg puth puti puug puuh puui puvg puvh puvi pvtg pvth pvti pvug pvuh pvui pvvg pvvh pvvi qttg qtth qtti qtug qtuh qtui qtvg qtvh qtvi qutg quth quti quug quuh quui quvg quvh quvi qvtg qvth qvti qvug qvuh qvui qvvg qvvh qvvi rttg rtth rtti rtug rtuh rtui rtvg rtvh rtvi rutg ruth ruti ruug ruuh ruui ruvg ruvh ruvi rvtg rvth rvti rvug rvuh rvui rvvg rvvh rvvi sttg stth stti stug stuh stui stvg stvh stvi sutg suth suti suug suuh suui suvg suvh suvi svtg svth svti svug svuh svui svvg svvh svvi";

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
