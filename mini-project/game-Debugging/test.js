// setBugMap
function setBugMap(map, row, col){
    var temp = [1, 0 , -1];
    for(i of temp){
        for(j of temp){
            try {
                if(map[row+i][col-j] != "B"){
                    map[row+i][col-j] += 1;
                }
            } catch (error) { }
        }
    }
    return map;
}

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

// 버그 위치 만들기
// row = 9, col =9 
// cell 9 * 9 = 81
// bug = 9개
// bugPosition = 버그 위치를 담을 배열
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

// 버그지도 만들기
//// 1. 비어있는 지도 만들기 
var bugMap = Array.from(Array(rowCnt), ()=> Array(colCnt).fill(0));

[
    [0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0,]
]


//// 2. 버그 넣기 + 주변에 버그 개수 넣기
bugPosition.forEach(function(idx){
    row = Math.round(idx/rowCnt);
    col = idx%rowCnt;
    bugMap[row][col] = "B";
    bugMap = setBugMap(bugMap, row, col);
});

//// 3. 버그맵 확인
for(var i = 0; i < rowCnt; i++){
    var temp = "";
    for(var j = 0; j <colCnt; j++){
        temp += bugMap[i][j] + " ";
    }
    console.log(temp);
}

//// 4. 선택한 셀의 값에 따라서 서로 다른 대응 필요
//// 4-1. 버그다! -> 게임 종료
//// 4-2. 숫자다! -> 숫자 노출
//// 4-3. 0이다!! -> 숫자로 둘러쌓인만큼 노출
