// 호이스팅(Hosting)

// caseA : var를 사용한 경우
console.log(nameA);         // undefined
var nameA = "jjangu";
console.log(nameA);         // jjangu

// caseB의 실제 동작 순서 (호이스팅이 발생)
var nameB;
console.log(nameA);         // undefined
nameB = "jjangu";
console.log(nameA);         // jjangu

// caseC : let을 사용한 경우
console.log(nameC);         // ERROR : 선언되어있지 않은 변수이므로 찾을 수 없기때문에 오류 발생
let nameC = "jjangu";
console.log(nameC);         // jjangu
