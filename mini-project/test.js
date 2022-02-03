const arrlike = {
    // Symbol.iterator() 
    [Symbol.iterator]() {
        this.i = 0;
        return this;
    },

    // next()
    next() {
        return { value: this[this.i], done: ++this.i > this.length };
    },

    // index
    0: "Nice",
    1: "to",
    2: "meet",
    3: "you",

    // length
    length: 4,
}

for(var txt of arrlike){
    console.log(txt);
}

console.log(...arrlike);

var [ a, b, c, d ] = arrlike;

console.log(a);
console.log(b);
console.log(c);
console.log(d);