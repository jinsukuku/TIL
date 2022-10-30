// 함수 연습문제(1)

function MAX(x, y){
    // case1
    if (x>y) { return x }
    else if(y>x) { return y }

    // case2
    // return x > y ? x : y;
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100,7));