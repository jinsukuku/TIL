/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];

  // 코드 구현 시작 영역
  // 1. result를 2차원 배열로 변경
  for (let i = 0; i < length; i++){
    result.push([]);
  }


  // 2. 패턴 기반으로 반복문 구현 
  //// 2-1. length 만큼 시작해서 숫자를 채운다
  //// 2-2. length - i , 방향 , 2회
  //// 2-3. length == 0, break

  let x, y, num;
  let direction = 1;
  x = y = num = 0;
  x--;

  
  while(1){
    for (let i = 0; i < length; i++){
      x += direction;
      result[y][x] = ++num;
    }

    length--;
    if(length == 0) break;

    for (let i = 0; i < length; i++){
      y += direction;
      result[y][x] = ++num;
    }
    
    direction *= -1;
  }


  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
