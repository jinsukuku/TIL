var tempBugPosition = [
    4, 12, 28, 35, 38,
   49, 52, 73, 77
 ];
var tempBugMap = [
    0,   0,   1,   2, 'B', 1,   0, 0, 0, 0, 0, 1,
    'B', 2,   1,   0, 0,   0,   1, 1, 2, 1, 1, 0,
    0,   1,   1,   1, 'B', 2,   1, 0, 0, 0, 1, 'B',
    1,   2,   'B', 2, 1,   1,   1, 2, 2, 0, 1, 1,
    2,   'B', 1,   1, 'B', 1,   0, 0, 0, 1, 1, 1,
    1,   1,   1,   1, 1,   1,   0, 1, 1, 1, 0, 0,
    1,   'B', 1,   0, 1,   'B', 1, 0, 0
  ];

var userBugCount = 9;
var timer = 60 * 60 * 1000;
var gameOver = false;
var boxes = document.getElementById("boxes");

for(var i = 0; i < 81; i++){
    boxes.children[i].setAttribute("name", i);
}

// left click event
boxes.addEventListener("click", (e) => {
    if(gameOver) return;    // 게임오버상태라면 더이상의 클릭을 허용하지 않는다
    console.log("left click!");

    // 숫자가 표시된 타일이라면, 클릭 막기
    var index = Number(e.target.attributes["name"].value);
    var classArr = [ ... e.target.classList ];
    if(classArr.indexOf("aroundBugCount") != -1) return;    

    if(tempBugPosition.indexOf(index) != -1){
        // 버그칸이라면 모든 버그 칸을 bug이미지로 바꾸기
        console.log("bug!!");
        for(var i = 0; i < tempBugPosition.length; i++){
            var index = tempBugPosition[i];
            console.log(boxes.children[index].classList.remove("ghost"));
            boxes.children[index].classList.add("bug", "clicked");
            // *잘못된 위치의 고스트 지우기
        }
        
        // 상단 이모티콘 우는 얼굴로 이미지 변경
        document.getElementsByClassName("headerFace")[0].classList.remove("happy");

        // 더이상의 클릭이벤트를 허용하지않기 위해 gameover -> true로 설정
        gameOver = true;
    }else{
        // 주변 버그 정보 보여주기
        e.target.classList.add("aroundBugCount", "count"+tempBugMap[index], "clicked");
        console.log("count"+tempBugMap[index]);
    }
});

// right click event
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
