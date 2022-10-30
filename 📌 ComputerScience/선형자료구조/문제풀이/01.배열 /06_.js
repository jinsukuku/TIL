/* two sum */

/* user code */
function answer(nums, target) {
  // 코드 구현 시작 영역
  for(let i = 0; i<nums.length; i++){
    for(let j = i + 1; j<nums.length; j++){
      if(target == nums[j] + nums[i]){
        return [i, j];
      }
    }
  }
  // 코드 구현 종료 영역
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
