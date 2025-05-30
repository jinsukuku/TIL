import React, { useState } from 'react';
import styled  from 'styled-components';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const SidoWrapper = styled.div`
    width: 560px; height: 60px;
    margin: 0 auto;

    background-color: white;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.08);
`

const SelectedSidoName = styled.h2`
    height: 60px

    font-size: 24px; line-height: 60px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    position: relative;
`

const ItemList = styled.ul`
    width: 560px; height: 300px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    margin: 0; padding: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    position: absolute;
    top:60px; left: 0;
    z-index: 999;
    overflow:hidden;

    // visibility: ${(props) => props.visible || "hidden"};    
`

const Item = styled.li`
    width: 33.3%; line-height: 48px;
    list-style: none;
    box-sizing: border-box;
    
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    
    background-color: #ffffff;
    border: 1px solid #eeeeee;

    &:hover {
        background: #EEF0F3;
    }
`

const SelectedItem = styled.li`
    width: 33.3%; line-height: 48px;
    list-style: none;
    box-sizing: border-box;
    
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    
    background-color: #DAE0E9;
    border: 1px solid #eeeeee;

    &:hover {
        background: #EEF0F3;
    }
`
const DropDownMenu = ({sidoName, onChangeSidoName}) => {
    const sidoNameList= [
        '전국', '서울', '부산', '대구', '인천', 
        '광주', '대전', '울산', '경기', '강원', 
        '충북', '충남', '전북', '전남', '경북', 
        '경남', '제주', '세종'
    ]
    
    return(
        <ItemList>
            {
                sidoNameList.map((sido,)=>(
                    sidoName === sido ? <SelectedItem value={sido} onClick={onChangeSidoName}>{sido}</SelectedItem> : <Item value={sido} onClick={onChangeSidoName}>{sido}</Item>
                ))
            }
        </ItemList>
    )
}

const DropDownArrow = ({showsMenu}) => {
    const style = {
        fontSize: 40,
        lineHeight: 60,
        position: 'absolute',
        top:10, right: 10,
    }

    if(showsMenu) return <KeyboardArrowUp style={style}></KeyboardArrowUp>
    return(
        <KeyboardArrowDown style={style}></KeyboardArrowDown>
    )
}


const SidoDropDown = ({sidoName, onChangeSidoName}) => {    
    // dropdown menu toggle
    const [showsMenu, setShowsMenu] = useState(false);
    const menuToggle = () => setShowsMenu(!showsMenu);
    
    return (
        <SidoWrapper onClick={menuToggle}>
            <SelectedSidoName>
                {sidoName}
                <DropDownArrow showsMenu = {showsMenu}></DropDownArrow>
                { showsMenu ? <DropDownMenu sidoName={sidoName} onChangeSidoName={ onChangeSidoName}></DropDownMenu> : null }
            </SelectedSidoName>
        </SidoWrapper>
    )
}

export default SidoDropDown;