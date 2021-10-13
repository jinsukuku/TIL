/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "";
  let cnt = 1;
  // 코드 구현 시작 영역

  for(let i = 0; i<height; i++){
    for(let j = 0; j<height-i-1; j++){
      str+=" ";
    }
    for(let j = 0; j<i*2+1; j++){
      str+="*";
    }
    str+="\n";
  }

  // 코드 구현 종료 영역

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1}`);
  console.log(`${answer(input[i])}`);
}
