import React from 'react';
import styled from 'styled-components';

const CardItemTitle = styled.h5`
    margin: 4px 0px 2px;
    font-size: 0.9em;
`

const CardItemDes = styled.p`
    font-size: 2.6em;
    font-weight: 500;
    line-height: 42px;
    display: inline-block;
`

const CardItemDesUnit = styled.span`
    margin-left: 4px;
    font-size: 0.5em;
    font-weight: 500;
`

const CardItemInfo = (props) => { 
    return(
        <div>
            <CardItemTitle>{props.itemTitle === 'pm10' ? '미세먼지 수치' : '초미세먼지 수치'}</CardItemTitle>
            <CardItemDes>
                {props.itemDes}
                <CardItemDesUnit>{props.itemDesUnit}</CardItemDesUnit>
            </CardItemDes>
        </div>
    )
}

CardItemInfo.defaultProps = {
    itemTitle: '-',
    itemDes: '0',
    itemDesUnit: '㎍/㎥',
}

export default CardItemInfo;