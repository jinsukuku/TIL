import React, {useState} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const {name, nickname} = inputs;

    const temp = {
        name: '',
        age: 0,
        [name]: 'jey'
    }
    console.log(temp);
    
    const onChange = (e) => {
        // e.target 비구조 할당
        // 태그에 지정한 name,value를 비구조 할당한다 (순서는 상관X, 이름이 같은 속성을 저장한다)
        const { name, value } = e.target;
        // setInput()
        // object의 property를 지정하고, [변수명]: 변수명 형태로 넣어주면 바인딩 가능
        // spread를 사용하는 이유는 property명 입력 실수 방지를 위함
        setInputs({
            ...inputs,
            [name]: value
        });

    }
    const onReset = () => {
        setInputs({
          name: '',
          nickname: '',
        })
      };

    return (
        <div>
            <input placeholder='이름' name="name" onChange={onChange} value={name}></input>
            <br></br>
            <input placeholder='닉네임' name="nickname" onChange={onChange} value={nickname}></input>
            <br></br>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;