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

var showMap = [...bugMap];

var selectedIndex = 11;
var getOpenIndex = [];
var colCount = 9;
var result = [];

function getIndex(selectedIndex, colCount, bugMap, result=[], used = new Map()) {
    var temp = [
        -colCount-1, -colCount, -colCount+1,
        -1, 1,
        colCount-1, colCount, colCount+1
    ];

    for(var i of temp){
        var idx = i + selectedIndex;

        if(used.get(idx) == 2) continue;
        if(idx < 0) return result;

        if(bugMap[idx] == 0) {
            used.set(idx, 2);
            result = getIndex(idx, colCount, bugMap, result, used);
        }else if(bugMap[idx] != "B" && bugMap[idx] != 0){
            if(used.get(idx) == undefined){
                used.set(idx, 1);
            }else if(used.get(idx) == 1){ 
                used.set(idx, 2);
            }
        }
    }

    // for(var i of temp){

    //     var idx = i + selectedIndex;
    //     // console.log(i, selectedIndex, idx);
    //     if(used.includes(idx)) continue;
    //     if(idx < 0) return result;
    //     if(bugMap[idx] == 0){
    //         used.push(idx);
    //         result = getIndex(idx, colCount, bugMap, result, used);
    //     }else if(bugMap[idx] != "B"){ 
    //         result.push(idx);
    //         used.push(idx);
    //         return result;
    //     }
    // }
    // console.log(used);
    return used;
}
var test = getIndex(selectedIndex, colCount, bugMap);
var keys = test.keys();
keys = Array.from(keys);

temp = ""
for(var i = 0; i < 81; i ++){
    if(temp.length == 18){
        console.log(temp);
        temp = "";
    }
    if(i == selectedIndex){
        temp += "S" + " ";
    }else if(keys.includes(i) && test.get(i) == 2){
        temp += "X" + " ";
    }else{
        temp += "O" + " ";
    }
}