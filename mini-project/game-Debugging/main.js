import {getBugMap} from './createBugMap.js';
import {getBugPosition} from './createBugMap.js';
import {getOpenTileList} from './getOpenTileList.js';

//selector test
let test = document.querySelectorAll("li");

// initSetting() 을 위한 전역변수
let userBugCount = 0;
let bugCount = 9;
let bugMap = getBugMap();
let bugPosition = getBugPosition();

// default letiable 
let timer = 60 * 60 * 1000;
let gameOver = false;

// HTML element reference
let boxes = document.getElementById("boxes");
let face = document.getElementsByClassName("headerFace")[0];

// li의 index를 가져오는 방법을 몰라서, name 값을 index로 지정함
for(let i = 0; i < 81; i++){
    boxes.children[i].setAttribute("name", i);
}

/*
* Click event
*/

// *face click event 
face.addEventListener("click", (e) => {
    //게임 오버 후, 얼굴 클릭하면 초기화
    if(gameOver) {
        // initSetting();
        location.reload(true);
    }else if(confirm("RESTART?")){
        location.reload(true);       
    }
});

// *boxes left click event
boxes.addEventListener("click", (e) => {
    if(gameOver) return;    // 게임오버상태라면 더이상의 클릭을 허용하지 않는다

    // 숫자가 표시된 타일이라면, 클릭 막기
    let index = Number(e.target.attributes["name"].value);

    // index를 2차원 좌표로 수정
    let row = Math.floor(index / 9);
    let col = index % 9;

    // 클릭된 요소의 클래스 리스트 가져오기
    let classArr = [ ... e.target.classList ];

    // 클릭되어 있는 상태라면 return 
    if(classArr.indexOf("aroundBugCount") != -1) return;
    if(classArr.indexOf("ghost") != -1) return;    

    // 버그를 클릭했다면
    if(bugPosition.indexOf(index) != -1){
        // 버그칸이라면 모든 버그 칸을 bug이미지로 바꾸기 = GameOver
        console.log("bug!!");
        for(let i = 0; i < bugPosition.length; i++){
            let index = bugPosition[i];
            console.log(boxes.children[index].classList.remove("ghost"));
            boxes.children[index].classList.add("bug", "clicked");
            // **잘못된 위치의 고스트 처리
        }
        
        // 상단 이모티콘 우는 얼굴로 이미지 변경
        document.getElementsByClassName("headerFace")[0].classList.remove("happy");

        // 더이상의 클릭이벤트를 허용하지않기 위해 gameover -> true로 설정
        gameOver = true;
        
    }else{
        // 최초 클릭이라면 주변 버그 정보 보여주기 + 재귀 불러오기(openTile)
        if(bugMap[row][col] == 0){
            let clickedList = getOpenTileList(index, bugMap);
            for(let i of clickedList){
                let now = test[i+3];
                let nowClassList = [...now.classList];
                if(!nowClassList.includes("clicked")){
                    row = Math.floor(i/9);
                    col = i%9;
                    now.classList.add("aroundBugCount", "count"+bugMap[row][col], "clicked")
                }
            }
        }else{
            e.target.classList.add("aroundBugCount", "count"+bugMap[row][col], "clicked");
        }
    }
});

// *boxes right click event
boxes.addEventListener("contextmenu", function(e){
    e.preventDefault();     // 게임오버여도 타일 위에서의 contextMenu는 확장되지 않도록
    if(gameOver) return;    // 게임오버상태라면 더이상의 클릭을 허용하지 않는다

    // 숫자가 표시된 타일이라면, 클릭 막기
    let index = Number(e.target.attributes["name"].value);
    let classArr = [ ... e.target.classList ];
    if(classArr.indexOf("aroundBugCount") != -1) return;    

    console.log("right click!");

    if(!e.target.className){
        e.target.classList.add("clicked", "ghost");
    }else{
        e.target.className = "";
    }
});
