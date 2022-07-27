import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";

const Section1Wrap = styled.div`
  margin-top: 130px;
`;

const Section1Banner = styled.div`
  position: relative;
`;
const Section1Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 42%;
  font-size: 50px;
  font-weight: 500;
  color: white;
`;

const MapWrap = styled.div`
  margin-top: 60px;
  padding: ${mainStyle.padding};
`;
const MapTabMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 49%;
  height: 200px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 10px;
    padding-left: 30px;
  }
  p {
    font-size: 21px;
    font-weight: 100;
    padding-left: 30px;
  }
`;

const Map = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 766px;
  background-color: beige;
`;

export const Section1 = () => {
  return (
    <Section1Wrap>
      <Section1Banner>
        <img src={require("./Image/section.png")} width="100%"></img>
        <Section1Title>다이슨 서비스센터</Section1Title>
      </Section1Banner>
      <MapWrap>
        <MapTabMenu>
          <Box>
            <h3>프리미엄 서비스 센터</h3>
            <p>
              롯데월드 하이마트 메가스토어 잠실점 <br />
              무선 청소기 수리 시 10만원 상당의 프리미엄 청소 서비스 무료 제공
              (내/외부 물청소 포함)
            </p>
          </Box>
          <Box>
            <h3>전문 서비스 센터</h3>
            <p>
              7개의 다이슨 전문 서비스 센터에서 고객님을 위해 대기하고 있습니다.
              <br />
              무선 청소기 수리 시 무료 청소 서비스가 제공됩니다. (에어건을
              이용한 먼지 제거)
            </p>
          </Box>
        </MapTabMenu>
        <Map></Map>
      </MapWrap>
    </Section1Wrap>
  );
};
