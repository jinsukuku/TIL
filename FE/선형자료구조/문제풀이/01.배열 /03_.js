/* 두 수 최대합 */

/* user code */
function answer(nums) {
  let result = [];

  // 코드 구현 시작 영역
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];

  for(let i = 2; i < nums.length; i++){
    if (nums[i]>result[0]){
      result[1] = result[0]; // 주석 참고
      result[0] = nums[i];
    }else if (nums[i]>result[1]){
      result[1] = nums[i];
    }
  }
  // 코드 구현 종료 영역

  
  ///// 💡 result[1] = result[0]; 가 필요한 이유
  
  // result는 nums배열 요소 중 가장 큰 2개 요소를 순서대로 갖는다
  // 만약 result[0]보다 nums[i]가 크다면
  // 두번째로 큰 요소는 당연히 result[0]이므로 result[1]의 자리에 result[0]을 넣어주어야한다

  // 예를 들어 result = [ 10, 2 ]; 이고, nums[i] 가 12라면,
  // 배열 내에서 가장 큰 2개 수를 result는 요소로 갖기때문에 result = [ 12, 2 ]가 아닌
  // result = [ 12, 10 ]이 되어야한다 

  return result;
}

/* main code */
let input = [
  // TC: 1
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],

  // TC: 2
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],

  // TC: 3
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
