import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';

const CardWrapper = styled.div`
    width: 300px; height: 314px;
    background-color: #ffffff;

    border-radius: 16px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.18);
    margin: 10px;
    overflow:hidden;
    
    display: flex;
    flex-direction: column;

    textAlign: center;
`
const StationName = styled.h2`
    margin: 20px 10px 18px 10px;
    text-indent: 10px;
    font-size: 20px;
    line-height: 36px;
    position: relative;
`

const LikeIcon = function({props}){
    const [likeState, setLikeState] = useState(false);
    const likeToggle = () => setLikeState(!likeState);

    const divStyle = {
        width: 32, height: 32,
        position: 'absolute',
        top: 4, right: 4,
        overflow: 'hidden',
    }

    const commStyle = {
        position: 'absolute',
        width: 28, height:28,
        left: 2, top: 2,
        cursor: 'pointer',
    }

    const iconStyle = {
        ...commStyle,
        color: likeState ? '#ed506c' : '#aaaaaa',
    }
    
    return(
        <div style={divStyle}>
            {likeState ? <FavoriteOutlined style={iconStyle}></FavoriteOutlined> : <FavoriteBorderOutlined style={iconStyle}></FavoriteBorderOutlined>}
            <span style={commStyle} onClick={likeToggle}></span>
        </div>
    )
}

const Card = (props) => {
    const [likeList, setLikeList] = useState([]);
    const addLikeItem = (e) => {
        console.log(e);
    }
    return(
        <CardWrapper>
            <StationName>
                {props.stationName}
                <LikeIcon onClick={addLikeItem} stationName={props.stationName}></LikeIcon>
            </StationName>
            {
                props.itemInfo.map((item) => (
                    <CardItem
                        key={item.stationName+item.itemTitle}
                        itemTitle={item.itemTitle}
                        itemDes={item.itemDes}
                        itemState={item.itemState}
                    ></CardItem>
                ))
            }
        </CardWrapper>
    )
}

Card.defaultProps = {
    itemDes: null,
    itemState: null
}

export default Card;