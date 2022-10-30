import React, {useState} from 'react';

function Counter({props}){
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        console.log("+1");
        setNumber(number+1);
    }
    const onDecrease = () => {
        console.log("-1");
        setNumber(number-1);
    }
    return(
        <div>
            <h1>{number<0 ? setNumber(0) : number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;