// 02-8. DataType Casting

// String()
console.log(typeof String(123));            // "123"
console.log(typeof String(1/0));            // "Infinity"
console.log(typeof String(-1/0));           // "-Infinity"
console.log(typeof String(NaN));            // "NaN"
console.log(typeof String(true));           // "true"
console.log(typeof String(undefined));      // "undefined"
console.log(typeof String(null));           // "null"
console.log(typeof String("hello"));        // "hello"


// Number() 
console.log(Number(""));            // 0
console.log(Number("123"));         // 123
console.log(Number("hello"));       // NaN (Not a Number)
console.log(Number("hello123"));    // NaN
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN

// parseInt() : 명시적 정수 형변환
console.log(parseInt("123.456"));     // 123

// parseFloat() : 명시적 실수 형변환
console.log(parseFloat("123.456"));   // 123.456


// Boolean()
console.log(Boolean("123"));            // true
console.log(Boolean("hello"));          // true
console.log(Boolean("0"));              // true
console.log(Boolean(""));               // false
console.log(Boolean(0));                // false
console.log(Boolean(123));              // ture
console.log(Boolean(NaN));              // false
console.log(Boolean(null));             // false
console.log(Boolean(undefined));        // false

