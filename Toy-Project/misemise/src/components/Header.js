import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderTitle from './HeaderTitle';
import SidoDropDown from './SidoDropDown';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`
const Wrapper = styled.div`
    width: 100%; height: 240px;
    padding: 28px; margin: 30px 0;
    position: relative;
    box-sizing: border-box;

    background: #5D5FF0;
    border-radius: 16px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.18);
`

const Header = (props) => {    
    return (
        <Wrapper>
            <GlobalStyle />
            <HeaderTitle></HeaderTitle>
            {/* <SidoDropDown sidoName={sidoName} onChangeSidoName={onChangeSidoName} ></SidoDropDown> */}
            <SidoDropDown></SidoDropDown>
        </Wrapper>
    )
}

export default Header;
