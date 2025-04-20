import React, {useState} from 'react';
import styled,  {createGlobalStyle} from 'styled-components';
import HeaderTitle from './components/HeaderTitle';
import SidoDropDown from './components/SidoDropDown';
import Contents from './components/Contents';

const GlobalStyle = createGlobalStyle`
  body{
    background: #E6E9ED;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
`;

const Wrapper = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto 40px;
`

const Header = styled.div`
  width: 100%; height: 240px;
  padding: 28px; margin: 30px 0;
  position: relative;
  box-sizing: border-box;

  background: #5D5FF0;
  border-radius: 16px;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.18);
`

function App() {
  const [sidoName, setSidoName] = useState("울산");
  console.log(`App 랜더 ${sidoName}`);
  const onChangeSidoName = (e) => {
    setSidoName(e.target.attributes.value.value);
  }

  return (
    <Wrapper>
      <GlobalStyle></GlobalStyle>
      <Header>
        <HeaderTitle></HeaderTitle>
        <SidoDropDown sidoName={sidoName} onChangeSidoName={onChangeSidoName} ></SidoDropDown>
      </Header>
      <Contents sidoName={sidoName}></Contents>
    </Wrapper>
  );
}

export default App;
