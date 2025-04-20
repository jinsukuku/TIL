import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CardItemInfo from './CardItemInfo';
import CardItemState from './CardItemState';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

const CardWrapper = styled.div`
    width: 90%; height: 100px;

    border: solid 1px #eeeeee;
    border-radius: 10px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.14);

    margin: 6px auto;
    padding: 14px;

    position: relative;
`

const CardItem = (props) => { 
    return(
        <CardWrapper>
            <GlobalStyle />
            <CardItemInfo itemTitle={props.itemTitle} itemDes={props.itemDes}></CardItemInfo>
            <CardItemState itemState={props.itemState}></CardItemState>
        </CardWrapper>
    )
}

export default CardItem;