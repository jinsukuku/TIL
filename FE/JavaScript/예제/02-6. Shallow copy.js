// 02-6. Shallow Copy
let student = {
    name : "짱구",
    age : 5,
};

// for문을 사용한 객체 복사
let tempA = {};

for (let key in student){
    tempA[key] = student[key];
}

tempA.name = "유리";

console.log(student);
console.log(tempA);


// Object.assign() 함수를 이용한 복사 
let tempB = Object.assign({}, student);
tempB.name = "철수";

console.log(student);
console.log(tempB);


// ES6부터 지원하는 전개 연산자(SpreadOperator)를 이용한 복사
// 전개 연산자 (...) : 객체 내부의 모든 entity를 전개해라 
let tempC = { ...student };     // { student.name, student.age } 와 같은 의미가 된다
tempC.name = "치타";

console.log(student);
console.log(tempC);


// 얕은 복사의 문제점
let student_test = {
    name : "짱구",
    age : 5,
    sizes : {
        height : 105.9,
        weight : 22.9
    }
};

let temp_test = { ...student_test};
temp_test.sizes.height = 111.1;

// entity에 object가 있는 경우, reference가 끊어지지 않는다
console.log(temp_test);
console.log(student_test);