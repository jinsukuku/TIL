/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  // 코드 구현 시작 영역
  // 1-1. 9명 = 7명(100) + 2명
  let sum = 0;
  for(let temp of dwarf) sum+=temp;

  // 1-2. 2명의 합을 구한다
  sum -= 100;

  // 2. for 두 요소의 합이 faker 2명에 대한 합고 같은지 비교 -> i,j
  let faker = [];
  for(let i = 0; i < dwarf.length; i++){
    for(let j = 0; j < dwarf.length; j++){
      if(sum == dwarf[i] + dwarf[j]){
        faker[0] = i;
        faker[1] = j;
      }
      if(faker.length != 0) break;
    }
  }

  // 3. faker 2명을 제외한 나머지 값을 result에 넣는다 
  let cnt = 0;
  for(let i = 0; i < dwarf.length; i++){
    if (faker[0] != i && faker[1] != i){
      result[cnt++] = dwarf[i];
    }
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
