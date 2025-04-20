import styled  from 'styled-components';

const Title = styled.h1`
    font-size: 42px;
    font-weight: bold;
    text-align: center;
    margin: 0;
`
const Description = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 12px 12px 20px 12px;
`

const HeaderTitle = (props) => {
    return (
        <>
            <Title>😷</Title>
            <Description>미세먼지를 확인하려는 지역을 선택하세요</Description>
        </>
    )
}

export default HeaderTitle;