// import
import createBugMap from "createBugMap.js";



// initSetting() 을 위한 전역변수
var bugPosition;
var bugMap;
var userBugCount;
var bugCount;

// default variable 
var timer = 60 * 60 * 1000;
var gameOver = false;

// HTML element reference
var boxes = document.getElementById("boxes");
var face = document.getElementsByClassName("headerFace")[0];

// li의 index를 가져오는 방법을 몰라서, name 값을 index로 지정함
for(var i = 0; i < 81; i++){
    boxes.children[i].setAttribute("name", i);
}

// BugPosition, BugMap, BugCount 설정
function initSetting(){
}

/*
* Click event
*/


// *face click event 
face.addEventListener("click", (e) => {
    //게임 오버 후, 얼굴 클릭하면 초기화
    if(gameOver) {
        initSetting();
    }
});

// *boxes left click event
boxes.addEventListener("click", (e) => {
    if(gameOver) return;    // 게임오버상태라면 더이상의 클릭을 허용하지 않는다

    // 숫자가 표시된 타일이라면, 클릭 막기
    var index = Number(e.target.attributes["name"].value);
    var classArr = [ ... e.target.classList ];
    if(classArr.indexOf("aroundBugCount") != -1) return;    

    if(bugPosition.indexOf(index) != -1){
        // 버그칸이라면 모든 버그 칸을 bug이미지로 바꾸기 = GameOver
        console.log("bug!!");
        for(var i = 0; i < bugPosition.length; i++){
            var index = bugPosition[i];
            console.log(boxes.children[index].classList.remove("ghost"));
            boxes.children[index].classList.add("bug", "clicked");
            // **잘못된 위치의 고스트 처리
        }
        
        // 상단 이모티콘 우는 얼굴로 이미지 변경
        document.getElementsByClassName("headerFace")[0].classList.remove("happy");

        // 더이상의 클릭이벤트를 허용하지않기 위해 gameover -> true로 설정
        gameOver = true;
        
    }else{
        // 주변 버그 정보 보여주기
        e.target.classList.add("aroundBugCount", "count"+bugMap[index], "clicked");
        console.log("count"+bugMap[index]);
    }
});

// *boxes right click event
boxes.addEventListener("contextmenu", function(e){
    e.preventDefault();     // 게임오버여도 타일 위에서의 contextMenu는 확장되지 않도록
    if(gameOver) return;    // 게임오버상태라면 더이상의 클릭을 허용하지 않는다
    console.log("right click!");

    if(!e.target.className){
        e.target.classList.add("clicked", "ghost");
    }else{
        e.target.className = "";
    }
});
