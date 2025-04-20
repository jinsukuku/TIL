// arrowFunc 
const test = (a,b) => { 
    return a+b;
}

// getter,setter
const score = {
    math: 80,
    english: 70,
    systemPrint: function(){
        console.log(`math: ${this.math}, english: ${this.english}`);
    },
    // getter
    get getMathScore() { return this.math },
    // setter
    /**
     * @param {number} value
     */
    set setMathScore(value) {
        this.math = value;
        this.systemPrint();
    }
}
// function 형태로 호출하지 않는다
score.setMathScore = 70;
console.log(getMathScore);

/*
    push
    length
    for..of
    for..in
    forEach
    map
    indexOf
    findIndex
    find
    filter
    splice
    slice
    shift
    pop
    unshift
    push
    concat
    join
    reduce
*/