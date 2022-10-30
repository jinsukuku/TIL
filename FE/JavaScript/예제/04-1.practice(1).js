// 조건문 연습문제
// switch문을 사용, 1~7 사이의 숫자를 입력받으면 요일을 출력해주는 코드를 작성하라 (1:월요일 ~ 7:일요일)

let userInput = 1;
let day;

switch(userInput){
    case 1 : 
        day = "월요일";
        break;
    case 2 : 
        day = "화요일";
        break;
    case 3 : 
        day = "수요일";
        break;
    case 4 : 
        day = "목요일";
        break;
    case 5 : 
        day = "금요일";
        break;
    case 6 : 
        day = "토요일";
        break;
    case 7 : 
        day = "일요일";
        break;
    default:
        day = "input error";
}   

console.log(day);