var boxes = document.getElementById("boxes");
// boxes.childNodes.item[0].style.backgroundImage= "url(img/bug.png)";
console.log(boxes);

// const temp1 = document.querySelector(".hello h1");
// const temp2 = document.querySelector(".hello:first-child");
// const temp3 = document.querySelectorAll(".hello h1");


var tempBugMap = [3, 13, 16, 32, 63, 42, 41, 80, 75];
var test = document.querySelectorAll("#boxes li");
test.className = "bug";

console.log("======");
test[10].className = "bug";

function clickTest(e){
    console.log("left click!");
    e.target.className = "bug";
}

var li = document.querySelectorAll('li');
console.log(li);
console.log(li[0]);

function btn_click(idx){
    li[idx].onclick = function(){
        console.log(idx);
    };
}

// boxes.addEventListener("click", clickTest);
// boxes.addEventListener("contextmenu", function(e){
//     console.log("right click!");
//     e.preventDefault();
//     var nowClickedElement = e.target;
//     console.log("===test");
//     console.log(nowClickedElement.index);
//     var targetClass = e.target.className;
//     if(!targetClass){
//         e.target.className = "ghost";
//     }else{
//         e.target.className = "";
//     }
// });