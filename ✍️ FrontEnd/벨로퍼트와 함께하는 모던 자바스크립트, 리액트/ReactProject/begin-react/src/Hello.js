import React from 'react';

function Hello(props){
    const style = {
      fontSize: 24,
      backgroundColor: 'gray',
      color: 'white',
      lineHeight: '1.4em',
      padding: '10px'
    }
    return (
        <div style={style}>
            <b>이름</b>: {props.name} <br/>
            <b>나이</b>: {props.age} <br/>
            <b>주소</b>: {props.address} <br/>
            {props.children}
            {props.check ? <h5>잘부탁드립니다</h5>:null}           
        </div>
    ) 
}

Hello.defaultProps = {
    name: '입력안함',
    age: '입력안함',
    address: '입력안함'
}

export default Hello;