// 201.삼항연산자
console.log(true == true ? 'true' : 'false');

// 202. Truty and Falsy
// undefined, null 은 falsy한 값

// 203. 단축평가 논리 계산법
const animal = {
    test: 'test'
}
const getName = (animal) => {
    return animal && animal.name;
    // A && B 의 경우, 
    // A 가 Truthy 한 값이라면 => B
    // A 가 Falsy 한 값이라면  => A
}
const getHobby = (animal) => {
    return animal.sound || animal
    // A && B 의 경우, 
    // A 가 Truthy 한 값이라면 => A
    // A 가 Falsy 한 값이라면  => B
}
console.log(getName(animal));
console.log(getHobby(animal));

// 204. 함수 기본 파라미터 
const printNumber = (n=100) => {
    console.log(n);
}
printNumber();
printNumber(1);

// 205. 더 똑똑한 조건문
// 이런 조건문을
const getSound = (animalName) => {
    switch(animalName){
        case 'dog': return 'ww';
        case 'cat': return 'mm';
        case 'bird': return 'jj';
        default: return '....';
    }
}
console.log(getSound('dog')); 
console.log(getSound('tiger')); 
// 이렇게 
const getSSound = (animalName) => {
    const aniamlSound = {
        dog: 'ww',
        cat: 'mm',
        bird: 'jj'
    }
    return aniamlSound[animalName] || '....';
}

console.log(getSSound('dog'));
console.log(getSSound('tiger'));

// 207. spread, rest
const numbers = [1,3,4,5,66,6,23,7]
console.log(...numbers);

const score = {
    math: 90,
    english: 39,
}
const {math, ...rest} = score;
console.log(math, rest, score);
// math = 90, rest = {english: 30}, score = {math: 90, english 39}

const {mathScore, ...another} = score;
console.log(mathScore, another, score);
// mathScore = 90, another = {english: 30}, score = {math: 90, english 39}


// 301. 비동기
// 동기: 순서대로, 비동기: 동시에 가능(원하는 순서 설정)

