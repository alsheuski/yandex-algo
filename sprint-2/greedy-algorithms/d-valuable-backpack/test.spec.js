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

describe("S2. Greedy algorithms. D. Valuable backpack", () => {
  const inputFile = path.join(__dirname, "input.txt");
  const outputFile = path.join(__dirname, "output.txt");

  let fsMock;

  beforeEach(() => {
    fsMock = sinon.mock(fs);
  });

  afterEach(() => {
    fsMock.restore();
  });

  it(`'36\n4\n25 50\n30 40\n10 80\n2 3' should return '3'`, async () => {
    const input = `36\n4\n25 50\n30 40\n10 80\n2 3`;
    const expected = `3`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'123\n4\n25 50\n30 40\n30 80\n2 3' should return '1 2 3'`, async () => {
    const input = `123\n4\n25 50\n30 40\n30 80\n2 3`;
    const expected = `1 2 3`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });

  it(`'76
99
47 14
15 17
27 14
9 15
26 45
11 32
0 37
8 13
12 43
49 7
46 27
16 29
0 20
9 23
30 44
18 29
16 45
50 36
15 32
37 28
42 25
46 47
21 10
17 28
45 34
35 2
19 19
39 50
48 13
20 40
40 31
17 44
35 30
21 50
31 15
31 12
31 15
18 14
16 30
4 14
12 10
32 20
42 23
3 18
37 33
39 4
13 22
49 14
2 41
41 2
33 1
44 9
46 33
42 32
10 39
16 15
27 8
19 5
8 10
30 34
35 43
32 35
50 36
0 28
6 40
45 9
49 36
22 50
50 34
10 6
19 34
30 13
28 41
39 29
3 48
40 24
15 3
2 33
14 21
2 5
3 17
43 43
10 18
5 20
41 20
28 41
35 18
10 47
3 49
50 23
3 48
43 31
30 33
38 46
28 50
33 32
45 50
35 21
24 7' should return '9 49 50 65 68 89'`, async () => {
    const input = `76
		99
		47 14
		15 17
		27 14
		9 15
		26 45
		11 32
		0 37
		8 13
		12 43
		49 7
		46 27
		16 29
		0 20
		9 23
		30 44
		18 29
		16 45
		50 36
		15 32
		37 28
		42 25
		46 47
		21 10
		17 28
		45 34
		35 2
		19 19
		39 50
		48 13
		20 40
		40 31
		17 44
		35 30
		21 50
		31 15
		31 12
		31 15
		18 14
		16 30
		4 14
		12 10
		32 20
		42 23
		3 18
		37 33
		39 4
		13 22
		49 14
		2 41
		41 2
		33 1
		44 9
		46 33
		42 32
		10 39
		16 15
		27 8
		19 5
		8 10
		30 34
		35 43
		32 35
		50 36
		0 28
		6 40
		45 9
		49 36
		22 50
		50 34
		10 6
		19 34
		30 13
		28 41
		39 29
		3 48
		40 24
		15 3
		2 33
		14 21
		2 5
		3 17
		43 43
		10 18
		5 20
		41 20
		28 41
		35 18
		10 47
		3 49
		50 23
		3 48
		43 31
		30 33
		38 46
		28 50
		33 32
		45 50
		35 21
		24 7`;
    const expected = `9 49 50 65 68 89`;

    fsMock.expects("readFileSync").withArgs(inputFile, "utf-8").returns(input);
    fsMock.expects("writeFileSync").withArgs(outputFile, expected, "utf-8");

    executeSolution();
  });
});
