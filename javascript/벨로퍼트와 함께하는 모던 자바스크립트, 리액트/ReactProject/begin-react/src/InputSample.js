import React, {useState} from 'react';

function InputSample({props}) {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onReset = () => {
        setValue('');
    }

    return(
        <div>
            <input onChange={onChange} value={value}></input>
            <button type="reset" onClick={onReset}>reset</button>
            <h2>value: {value?value:"입력안함"}</h2>
        </div>
    )
}

export default InputSample;
