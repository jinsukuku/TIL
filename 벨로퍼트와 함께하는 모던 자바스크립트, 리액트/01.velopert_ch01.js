// 101.hello javascript
console.log("hello javascript!");

// 102-1.let,const
let value = 1;
console.log(value);             // 1
value = 2;
console.log(value);             // 2

const constTest = "test";
// constTest = "constTest";     // error: "constTest" is read-only

// 102-2. var vs let | 자바스크립트 중급 강좌(140분 완성)/01-1.TemporalDeadZone(TDZ).md (https://url.kr/zdlnp4)
// 102-3. dataType: number,string,boolean,null,undefined
// 102-4. null vs undefined
let test;
console.log(test);      // undefined
// console.log(toast);  // null(error)

//103.operator(not → and → or)
let operator =  10;
operator++;
--operator;
operator += 2;  //12
operator -= 2;  //10
operator *= 2;  //20
operator /= 2;  //10

console.log(!true);                 // f
console.log(!false);                // t

console.log(true && true);          // t
console.log(true && false);         // f
console.log(false && false);        // f

console.log(true || true);          // t
console.log(true || false);         // t
console.log(false || false);        // f

//104-1.if
let age = 14;
if(age < 8){
    console.log("child");
}else if(age < 20){
    console.log("student");
}else{
    console.log("adult");
}

//104-2.switch,case
let blood = 'A';
switch(blood){
    case 'A': console.log("blood: A"); break;
    case 'B': console.log("blood: B"); break;
    case 'O': console.log("blood: O"); break;
    default: 
        console.log("blood: AB");
}

//105.function
// template literals
function hello(nam){
    console.log(`hello, ${name}`);
}
// default function
function defaultFunc(a,b){
    return a+b;
}
// arrow function
const arrowFunc = (a,b) => {
    return a+b;   
}

// 106-1.object
// 객체 내부 function은 method
const student = {
    name: 'jjangu',
    age: 5,
    className: 'sunflower',
    sayHello: function(){
        console.log(`hello, my name is ${this.name}`);
    },
    // in arrowFunc: this(X)
    // function으로 선언한 함수는 this가 자신이 속한 객체를 자동으로 가르키는데, 화살표함수는 그렇지 않기 때문
    sayHi: () => {
        console.log(`hi, my name is ${this.name}`);
    },
    sayHiThis: () => {
        console.log(`hi, my name is ${student.name}`);
    }
};

console.log(`name: ${student.name}`);
student.sayHello();
student.sayHi();
student.sayHiThis(); 

// 106-2.object destructuring assignment
function print(student){
    const {name,age,className} = student;
    console.log('print: ',name,age,className);
}
print(student);

function printParam({name, age, className}){
    console.log('printParam: ',name,age,className);
}
printParam(student);


// 106-3.getter, setter
const score = {
    math: 80,
    english: 74,
    korean: 96,
    printScore: function(){
        console.log(`math: ${this.math}, english: ${this.english}, korean: ${this.korean}`);
    },
    // getter
    // Q. Uncaught RangeError: Maximum call stack size exceeded A. attribute와 method이름을 동일하게 지정해서 무한루프되었음ㅎ
    get getMathScore() { return this.math },
    // setter
    /**
     * @param {number} value
     */
    set mathScore(value) {
        this.math = value;
        this.printScore();
    }
}

// getter: function의 형태로 호출하지 X, 조회를 통해 함수가 실행되고 결과값을 출력한다
console.log(score.getScore);
// setter: function의 형태로 호출하지 X, attribute의 값 업데이트 시 자동 실행된다
// score.setMathScore(100); //error
console.log(`math: ${score.getMathScore}`);
score.mathScore = 100;
console.log(`math: ${score.getMathScore}`);

// 107.array
const arr = [1,2,3,4,5];
const studentList = [
    {
        name: 'jjangu',
        age: 5,
    },
    {
        name: 'yuri',
        age: 5,
    }
]
console.log(studentList[0]);

// 107-1.array push
studentList.push(
    {
        name: 'huni',
        age: 5,
    }
)
console.log(studentList[2]);

// 107-2. array length
console.log(studentList.length);

// 108-1. for
// arr = [1,2,3,4,5]
for(let i = 0; i < 3; i++){
    console.log(`[for] i = ${i}, arr[${i}] is ${arr[i]}`);
}

// 108-2. while
let i = 0;
while(i < 3){
    console.log(`[while] i = ${i}, arr[${i}] is ${arr[i]}`);
    i++;
}

// 108-3. for..of
for(let n of arr){
    console.log(n);
}

// 108-4. for..in
let userInfo = {
    id: 'jjangu',
    pw: '1234',
    address: 'seoul'
}
for(let key in userInfo){
    // console.log(`${key}: ${userInfo.key}`) // undefined
    console.log(`${key}: ${userInfo[key]}`) 
}


// 108.Quiz
function biggerThanThree(numbers){
    let answer = [];
    for(let num of numbers){
        if(num > 3){
            answer.push(num);
        }
    }
    return answer;
}
const numbers = [1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers)); // [4,5,6,7]

// 108-5. includes()
console.log(numbers.includes(100)); //false

// 109. array built-in-function
let apb = ['a', 'b', 'c', 'd', 'e']

// 109-1. forEach
apb.forEach(a => {
    console.log(a);
});

// 109-2. map
const apbapb = apb.map( a => a + a);
console.log(apbapb);

// 109-3. indexOf
console.log(apb.indexOf('b'));

// 109-4. findIndex, find
    // 배열 안에 있는 값이 객체이거나, 배열인 경우
    // findIndex: index 반환
    // find: 전체 값 반환 
let apbinfo = [
    { id: 11, name: 'aa', },
    { id: 12, name: 'bb', },
    { id: 13, name: 'cc', },
]
console.log(apbinfo.findIndex(apbinfo => apbinfo.id == 12));
console.log(apbinfo.find(apbinfo => apbinfo.id == 11));

// 109-5. filter: 특정 조건을 만족하는 값을 추출, 배열로 반환 
console.log(apbinfo.filter(apb => apb.id > 11 ));

// 109-6. splice
// apb = ['a', 'b', 'c', 'd', 'e']
// apb.splice(idx, cnt) > idx 포함 cnt개
// 기존 배열에 영향을 준다
console.log(`apb = [${apb}] -> remove [${apb.splice(apb.indexOf('b'),2)}] -> [${apb}]`);

// 109-7. slice
// 아 어디까지인지가 두번째 파라미터래
// 기존 배열에 영향을 주지 않는다
apb = ['a', 'b', 'c', 'd', 'e']
console.log(`apb = [${apb}] -> remove [${apb.slice(apb.indexOf('b'),2)}] -> [${apb}]`);

// 109-8. shift, pop, unshift, push
apb.shift();        // 첫번째 요소 추출(삭제)
apb.pop();          // 마지막 요소 추출(삭제)
apb.unshift('a');   // 첫번째 요소로 추가
apb.push('e');      // 마지막 요소로 추가

// 109-9. concat, join
// apb = ['a', 'b', 'c', 'd', 'e']
console.log(apb.concat(apb));   // 배열끼리 이어붙이기
console.log(apb.join(' '));     // 배열의 값을 문자열 형태로 이어붙이기
console.log(apb.join());

// 109-10. reduce
// array.reduce((accumulator, current) => accumulator + current, 0);
// accumulator, current를 파라미터로 받아 사용하는 콜백함수와 reduce함수의 초기값이 필요
let nbs = [1,2,3,4,5];
console.log(`nbs = ${nbs}`);
nbs.reduce((a,b) => {
    console.log(`누적: ${a}, current: ${b}`);
    return a+b;
}, 0
);

// 110. prototype, class
// 110-1. 객체 생성자
function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){
        console.log(this.sound);
    };
}

const dog = new Animal('강아지', '뽀삐', '멍멍');
dog.say();
// 110-2. prototype
// 화살표함수에서는 this기준이 달라서 안되는구나 
// Animal.prototype.sayhi = () => {
//     console.log(`hi, ${this.sound}`)
// }
Animal.prototype.sayhi = function(){
    console.log(`hi, ${this.sound}`);
}
Animal.prototype.test = 100;
dog.sayhi();

// 110-3. 객체 생성자 상속받기
function Dog(name, sound, age, address){
    Animal.call(this, '개', name, sound);
    this.age = age;
    this.address = address;
}
Dog.prototype = Animal.prototype; // 이 과정 필요~
const ppoppy = new Dog('뽀삐', '왈왈', 10, '개집');
ppoppy.say();

// 110-4. 클래스
class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
    sayhi() {
        console.log(`hi im ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, age){
        super('개', name, age);
    }
}