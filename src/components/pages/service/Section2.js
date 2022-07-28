import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";

const Section2Wrap = styled.div`
  margin-top: 130px;
`;

const Section2Banner = styled.div``;

const Section2BoxWrap = styled.div`
  height: 80vh;
  padding: ${mainStyle.padding};
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxCon = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;
    color: ${mainStyle.mainColor};
  }
  h5 {
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    line-height: 30px;
    margin-bottom: 30px;
  }
  h6 {
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    line-height: 30px;
  }
`;

export const Section2 = () => {
  return (
    <>
      <Container />
      <Section2Wrap>
        <Section2Banner>
          <img
            src={require("./Image/section2.png")}
            width="100%"
            alt="dyson service center"
          />
        </Section2Banner>

        <Section2BoxWrap>
          <Box>
            <BoxCon>
              <h3>서비스 센터 방문</h3>
              <h5>
                전국의 서비스 센터를 방문하시면,
                <br /> 다이슨 엔지니어의 수리서비스를 받으실 수 있습니다.
              </h5>
            </BoxCon>
          </Box>
          <Box>
            <BoxCon>
              <h3>엔지니어 방문 서비스</h3>
              <h5>
                다이슨 고객 센터(1588-4253, 월~금 09:00~18:00)로 연락주시면
                <br /> 약속한 시간에 다이슨 엔지니어가 고객님 댁으로 방문해
                기기를 수리해 드립니다.
              </h5>
            </BoxCon>
          </Box>
          <Box>
            <BoxCon>
              <h3>픽업 수리 서비스</h3>
              <h5>
                포장이 번거로우시면 픽업 서비스를 이용해주세요. <br />
                엔지니어가 방문하여 제품을 포장해 드립니다. <br />
                제품을 수거한 후 수리가 완료되면 엔지니어가 다시 배송해
                드립니다. <br />
                (*픽업 서비스는 서울/경기지역에 한하여 제공됩니다)
              </h5>
              <h6>
                무선 청소기 제품 수리 시 프리미엄 청소 서비스가 무료로
                제공됩니다.
                <br />
                (서비스 접수: 다이슨 고객 센터(1588-4253) 또는 카카오톡)
              </h6>
            </BoxCon>
          </Box>
          <Box>
            <BoxCon>
              <h3>택배를 통한 수리 서비스</h3>
              <h5>
                전국 어디서나 택배를 이용해 편리하게 수리 받으세요. <br />
                발송해 드리는 제품 수거용 박스에 제품을 넣어서 보내주시면 <br />
                수리 후 다시 택배로 보내 드립니다.
              </h5>
              <h6>
                안전한 제품 관리를 위해 각 제품의 도착/배송 과정 영상을
                <br />
                카카오톡으로 보내 드립니다. <br />
                (서비스 접수: 다이슨 고객 센터(1588-4253) 또는 카카오톡)
              </h6>
            </BoxCon>
          </Box>
        </Section2BoxWrap>
      </Section2Wrap>
    </>
  );
};
