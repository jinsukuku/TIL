import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card'

const Wrapper = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto 40px;
`


const Contents = (props) => {
    const [miseList, setMiseList] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    ///////////////////////////////////////////////
    const miseApiUrl = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
    const serviceKey = "k7%2BDD0iQfVjEKjvd2QTf4qDTo0ix9eqTGgDM9j8rVhNWWmPXxay50NjXBTkV6KNuLhZxd6ggJp9kKCDbxaZJAA%3D%3D";
    const returnType = "json";
    const numOfRows = 100;
    const pageNo = 1;
    const ver = 1.0;

    ///////////////////////////////////////////////

    useEffect(() => {
        const fetchMiseList = async () => {
            try {
                console.log("useEffect 확인")
                setError(null);
                setMiseList(null);
                setLoading(true);
                const response = await axios.get((`${miseApiUrl}?serviceKey=${serviceKey}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}&pageNo=${pageNo}&sidoName=${props.sidoName}&ver=${ver}`))
                setMiseList(response.data);
            }catch (e) {
                setError(e);
            }
            setLoading(false);
        }
        fetchMiseList();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!miseList) return null;

    return(
        <Wrapper>
        {
          miseList.response.body.items
            .filter((mise => mise.sidoName === props.sidoName))
            .map((mise) => (
                <Card 
                key={mise.stationName}
                stationName={mise.sidoName + ' ' + mise.stationName}
                itemInfo={[
                  {
                    itemTitle: "pm10",
                    itemDes: mise.pm10Value===undefined? '-' :mise.pm10Value,
                    itemState: mise.pm10Grade===undefined?null:mise.pm10Grade,
                  },
                  {
                    itemTitle: "pm25",
                    itemDes: mise.pm25Value===undefined? '-' :mise.pm25Value,
                    itemState: mise.pm25Grade===undefined?null:mise.pm25Grade,
                  },
                ]}
              ></Card>
          ))
        }

        </Wrapper>
    )
}

Contents.defaultProps = {
    sidoName: "서울"
}

export default Contents;