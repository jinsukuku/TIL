/*
* 버그 지도를 여는 규칙 정하기 
*/

var bugPosition = [
    22, 26, 32, 43, 50,
    55, 62, 76, 79
];
var bugMap = [
    0, 0, 0,   0, 0,   0, 0, 0,   0,   0, 0,   0,
    1, 1, 1,   0, 1,   1, 0, 0,   0,   1, 'B', 2,
    1, 1, 'B', 0, 0,   0, 1, 2,   'B', 2, 2,   2,
    0, 0, 0,   0, 2,   2, 3, 'B', 1,   1, 1,   1,
    0, 1, 'B', 2, 2,   2, 1, 'B', 1,   0, 1,   1,
    1, 1, 'B', 1, 1,   1, 1, 1,   1,   1, 2,   2,
    0, 0, 0,   1, 'B', 1, 1, 'B', 1
];

var selectedIndex = 72;
var getOpenIndex = [];
var colCount = 9;
var result = [];

var map = [...bugMap];


// 오류. 1차원 배열이다보니 테두리부분 좌표의 주변 8개가 잘못 선택되는 이슈 -> 2차원 배열로 수정해서 체크해야함
function checkBox(selectedIndex, getOpenIndex, bugMap){
    if(selectedIndex == 0) return getOpenIndex;

    var checkAround = [
        -10, -9, -8,
        -1, 1, 0,
        8, 9, 10
    ];

    for(var i of checkAround){
        var idx = i+selectedIndex;
        if(0 <= idx && idx < 81 && !getOpenIndex.includes(idx) && bugMap[idx] != 'B'){
            console.log(getOpenIndex);
            getOpenIndex.push(idx);
            if(bugMap[idx] == '0'){
                getOpenIndex.push(idx);
                getOpenIndex = checkBox(idx, getOpenIndex, bugMap);
            }
        }
    }    
    return getOpenIndex;
}

getOpenIndex = checkBox(selectedIndex, getOpenIndex, bugMap);
console.log(getOpenIndex);

var temp = ""
for(var i = 0; i < 81; i++){
    if(getOpenIndex.includes(i)){
        temp += "X ";

    }else{
        temp += map[i] + " ";
    }

    if(i%9 == 8){
        console.log(temp);
        temp = "";
    }
}

console.log("=================");

temp = ""
for(var i = 0; i < 81; i++){
    temp += bugMap[i] + " ";
    if(i%9 == 8){
        console.log(temp);
        temp = "";
    }
}