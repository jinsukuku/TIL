import React from 'react';
import Lv1 from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Lv2 from '@mui/icons-material/SentimentSatisfiedAlt';
import Lv3 from '@mui/icons-material/SentimentNeutralOutlined';
import Lv4 from '@mui/icons-material/SentimentVeryDissatisfied';
import Lv5 from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import Lv0 from '@mui/icons-material/ReportOutlined';

const CardItemStateIcon = function({itemState}){

    const style = {
        fontSize: 48,
        color: 'white',
        display: 'inline-block',
        width: '100%',
    }

    if(itemState === '1')  return <Lv1 style={style}></Lv1>
    else if(itemState === '2') return <Lv2 style={style}></Lv2>
    else if(itemState === '3') return <Lv3 style={style}></Lv3>
    else if(itemState === '4') return <Lv4 style={style}></Lv4>
    else if(itemState === '5') return <Lv5 style={style}></Lv5>
    else return <Lv0 style={style}></Lv0>
    
}
const CardItemStateText = function({itemState}){
    const style = {
        fontSize: '1em',
        marginTop: 14,
        color: 'white'
    }

    const stsText = {
        1: '최고',
        2: '좋음',
        3: '보통',
        4: '나쁨',
        5: '최악',
        null: '상태없음',
    }
    return(
        <span style={style}>{stsText[itemState]}</span>
    )
}

const CardItemState = (props) => { 
    const stsBgColor = {
        1: '#2170F7',
        2: '#04C57E',
        3: '#F4C647',
        4: '#F38205',
        5: '#D9484D', 
        null: '#333333',
    }
    const style = {
        width: 100, height: 100,
        borderRadius: '0px 10px 10px 0px',
        position: 'absolute',
        top:0,
        right:0,
        backgroundColor: stsBgColor[props.itemState],
        textAlign: 'center',
        padding:10,
    }

    return(
        <div style={style}>
            <CardItemStateIcon itemState={props.itemState}></CardItemStateIcon>
            <CardItemStateText itemState={props.itemState}></CardItemStateText>
        </div>
    )
}

CardItemState.defaultProps = {
    itemState: '0',
}

export default CardItemState;