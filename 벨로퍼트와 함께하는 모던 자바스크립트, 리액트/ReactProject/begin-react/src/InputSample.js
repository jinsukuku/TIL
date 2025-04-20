import React, { useState,useRef} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
    age:'',
    address:'',
  });
  
  const style = {
    backgroundColor: 'lightGray',
    padding: 10,
  }
  const { name, nickname, age, address } = inputs; // 비구조화 할당을 통해 값 추출
  const nameInput = useRef();

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
      age:'',
      address:'',
    });
    nameInput.current.focus();
  };


  return (
    <div style={style}>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/><br/>
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/><br/>
      <input name="age" placeholder="나이" onChange={onChange} value={age} /><br/>
      <input name="address" placeholder="주소" onChange={onChange} value={address}/><br/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname}) / {age} / {address}
      </div>
    </div>
  );
}

export default InputSample;