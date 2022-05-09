import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import './App.css';

function App() {
  const name = "React";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, 
    padding: '1rem',
    textAlign: 'center'
  }


  return (
    <div className="App">
      <Wrapper>
        <Hello color="aqua" name="jjangu" />
        <h2 style={style}>{name}</h2>
      </Wrapper>
    </div>
  );
}

export default App;
