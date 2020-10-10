const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
const args = file.split(' ');
const a = parseInt(args[0], 10);
const x = parseInt(args[1], 10);
const b = parseInt(args[2], 10);
const c = parseInt(args[3], 10);
const result = a*Math.pow(x, 2) + b*x + c;

fs.writeFileSync('output.txt', result);
