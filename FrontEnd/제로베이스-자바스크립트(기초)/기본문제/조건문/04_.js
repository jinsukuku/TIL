/*** 4. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  result = total - 0.5 - withdraw;
  if(result<0 || withdraw%5!=0) result = total;

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
