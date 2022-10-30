import React, {useState} from 'react';

// 함수형 컴포넌트는 Hooks를 사용해 상태관리 가능 
function Counter() {
    //// 1. onClick을 위한 화살표 함수 추가
    // const onIncrease = () => { console.log("+1"); }
    // const onDncrease = () => { console.log("-1"); }

    // 2. 동적인 값(state) 부여 (import필요)
    const [number,setNumber] = useState(10);
    const onIncrease = () => { setNumber(number + 1); }
    const onDncrease = () => { setNumber(number - 1); }

    
    const numberStateTest = useState(0);        // 
    const numberTest = numberStateTest[0];      //
    const setNumberTest = numberStateTest[1];   //
    const consoleTest = () => {
        console.log(numberStateTest);
        console.log(numberStateTest[0]);
        console.log(numberStateTest[1]);
        console.log("=====참조확인=====")
        console.dir(numberTest);
        console.dir(setNumberTest);
    }

    // 3. useState()로 초기화한 변수 사용
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease} > +1 </button>
            <button onClick={onDncrease} > -1 </button>
            <button onClick={consoleTest} > Test </button>
        </div>
    );
}

export default Counter;
