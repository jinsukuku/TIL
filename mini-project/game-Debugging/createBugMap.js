/*
* 2차원 배열 형태의 버그 지도 만들기 
*/

// LEVEL

function Level (bug, row, col){  // Level 생성자 함수
    this.bug = bug;
    this.row = row;
    this.col = col;
}

var level = { // Level 정보
    0: null,    
    1: new Level(9, 9, 9),
    2: new Level(40, 16, 16),
    3: new Level(40, 16, 30),
}

var selectedLevel = 1;
var time = 60 * 60 * 1000;  //ms
var bug;        // bug 개수 

var cellCnt;    // cell 개수
var rowCnt;
var colCnt;
var bugPosition = [];

bug = level[selectedLevel].bug;
rowCnt = level[selectedLevel].row;
colCnt = level[selectedLevel].col;
cellCnt = rowCnt * colCnt

// setBugMap
function setBugMap(map, row, col){
    var temp = [1, 0 , -1];
    for(i of temp){
        for(j of temp){
            try {
                // not null을 조건에 추가한 이유 : 처음 지정한 크기의 배열을 벗어났을 때, 배열의 공간을 넓히고 값을 추가해버려서 대응
                if(map[row+i][col-j] != "B" && map[row+i][col-j] != null){
                    map[row+i][col-j] += 1;
                }
            } catch (error) {}
        }
    }
    return map;
}

// 버그 위치 만들기
while(bugPosition.length != bug){ 
    // 버그 위치가 버그 개수랑 같아지면 반복문 종료
    // num = 임시 위치 
    var num = Math.round(Math.random()*cellCnt); 
    if(bugPosition.indexOf(num) == -1){
        bugPosition.push(num);
    }
}

bugPosition.sort((a, b) => a-b);    // 정렬
console.log(bugPosition);

// 2차원 버그지도 만들기
//// 1. 비어있는 지도 만들기 
var bugMap = Array.from(Array(rowCnt), ()=> Array(colCnt).fill(0));

//// 2. 버그 넣기 + 주변에 버그 개수 넣기
bugPosition.forEach(function(idx){
    row = Math.floor(idx/rowCnt); // round는 오류 발생 rowCnt와 같아지는 경우가 생겨서 floor로 변경
    col = idx%rowCnt;
    bugMap[row][col] = "B";
    bugMap = setBugMap(bugMap, row, col);
});

//// 3. 버그맵 확인(출력해보기)
for(var i = 0; i < rowCnt; i++){
    var temp = "";
    for(var j = 0; j <colCnt; j++){
        temp += bugMap[i][j] + " ";
    }
    console.log(temp);
}

console.log(bugMap);


//// 4. 1차원 배열로 변환
var bugMapArr = [];
for(var map of bugMap){
    bugMapArr = [ ...bugMapArr, ...map ];
}

console.log(bugMapArr);
