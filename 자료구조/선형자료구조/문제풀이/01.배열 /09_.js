/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];

  // 코드 구현 시작 영역
  for(let i = 0; i < 10; i++) result.push(0);

  let arr = [];
  for(let i = s; i < e+1; i++) arr.push(String(i));
  for(let temp of arr){
      for(let num of temp){
          result[num]++;
      }
  }
  // 코드 구현 종료 영역
  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
