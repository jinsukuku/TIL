document.body.innerHTML += '<button>버튼1</button><button>버튼2</button>';
const btnList = document.querySelectorAll('button');
const [btn1, btn2] = [btnList[0], btnList[1]];

// btn1 클릭시 btn1 객체 출력 (this === btn1)
btn1.addEventListener("click", function() { console.log(this); });

// btn2 클릭시 Window 객체 출력 (this === Window)
btn2.addEventListener("click", () => { console.log(this); });