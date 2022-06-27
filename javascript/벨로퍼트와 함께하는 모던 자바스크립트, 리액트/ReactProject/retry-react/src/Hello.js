import React from 'react';

// 컴포넌트를 함수 형태로 
function Hello(props){
    return <h1 style={{color: props.color}}>
        Hello {props.name}, {props.color}
        <br/>
        {props.isSpecial&&props.isTest ? <b>*</b> : <b>$</b>}
        </h1> // jsx

        // 삼항 연산자 
        // 조건 ? true일때 실행문 : false일때 실행문 
        // props.isSpecial ? <b>*</b> : <b>$</b>
        // true => <b>*</b>
        // false => <b>$</b>
}

// defaultProps
Hello.defaultProps = {
    name: 'Default Props',
    color: 'pink'
}

export default Hello;