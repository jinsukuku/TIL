import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import Inputsample from './InputSample';

function App() {
  const name = "E1";
  const style = {
    backgroundColor: 'black',
    color: 'yellow'
  }

  return (
    <>
      <Inputsample />
      <Wrapper>
        <Hello name="E1" color="orange" isSpecial isTest />
        <Hello color="green" isSpecial isTest />
      </Wrapper>
      <Counter />
    </>
  );
}

export default App;
