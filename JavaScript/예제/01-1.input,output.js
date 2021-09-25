// input.txt
// Nice to meet you!

console.log("hello world");

const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");

console.log(input);