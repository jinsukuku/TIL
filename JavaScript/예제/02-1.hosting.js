// 호이스팅(Hosting)

// caseA : var를 사용한 경우
console.log(nameA);         // undefined
var nameA = "jjangu";
console.log(nameA);         // jjangu


// caseA의 실제 동작 순서 (호이스팅이 발생)
var nameA;
console.log(nameA);         // undefined
nameB = "jjangu";
console.log(nameA);         // jjangu

// caseB : let을 사용한 경우
console.log(nameB);         // ERROR : 선언되어있지 않은 변수이므로 찾을 수 없기때문에 오류 발생
let nameB = "jjangu";
console.log(nameB);         // jjangu
