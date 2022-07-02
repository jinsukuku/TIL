const temp = {
  name: '',
  age: 0,
}

// testA: spread 연산자 + 변수 사용해 property 초기화
const key1 = 'name';
const key2 = 'age';
const value1 = 'jjangu';
const value2 =5;

const testA = {
  ...temp,
  [key1]: value1,
  [key2]: value2,
}

// testB: spread 연산자 + 배열 사용해 property 초기화
const key = Object.keys(temp);
const value = ['chita', 6];

const testB = {
  ...temp,
  [key[0]]: value[0],
  [key[1]]: value[1],
}

console.log(temp);
console.log(testA);
console.log(testB);