//toFixed(), Infinity, NaN
let a = 123.0;
let b = 123.456;
let c = 1 / 0;

// 기대값 : -0.456
console.log(a-b);                   // -0.45600000000000307
console.log((a-b).toFixed(3));      // -0.456
console.log(c);                     // Infinity
console.log(a / "hello");           // NaN
