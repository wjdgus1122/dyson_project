import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
const MainBannerWrap = styled.div``;

const MainBannerBg = styled.div`
  width: 100%;
  height: 570px;
  background-image: url("./Image/mainbanner.png");
  position: relative;
`;
const BannerConWrap = styled.div`
  color: white;
  position: absolute;
  top: 90px;
  left: 240px;

  h4 {
    font-size: 60px;
    font-weight: 500;
  }
  h1 {
    font-size: 100px;
    font-weight: 500;
  }
`;

const ServiceBoxWrap = styled.div`
  margin-top: 60px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 390px;
  height: 250px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
  }
  h5 {
    font-size: 15px;
    font-weight: 100;
  }
`;

const BoxCon = styled.div`
  padding: 0 90px;
  span {
    color: ${mainStyle.mainColor};
  }
`;

export const MainBanner = () => {
  return (
    <>
      <MainBannerWrap>
        <MainBannerBg>
          <img
            src={require("./Image/mainbanner.png")}
            alt="service"
            width="100%"
            height="570px"
          ></img>
          <BannerConWrap>
            <h4>dyson</h4>
            <h1>고객지원</h1>
          </BannerConWrap>
        </MainBannerBg>
      </MainBannerWrap>
      <ServiceBoxWrap>
        <Box onClick={() => window.scrollTo({ top: 1030 })}>
          <BoxCon>
            <span>
              <i class="fa-solid fa-warehouse"></i>
            </span>
            <h3>다이슨 서비스센터</h3>
            <h5>
              7개의 다이슨 전문 서비스 센터에서 고객님을 위해 대기하고 있습니다.
            </h5>
          </BoxCon>
        </Box>
        <Box onClick={() => window.scrollTo({ top: 2596 })}>
          <BoxCon>
            <span>
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </span>
            <h3>다이슨 수리 서비스</h3>
            <h5>전국 어디서나 택배를 이용해 편리하게 수리 받으세요.</h5>
          </BoxCon>
        </Box>
        <Box onClick={() => window.scrollTo({ top: 4229 })}>
          <BoxCon>
            <span>
              <i class="fa-solid fa-mobile-screen"></i>
            </span>
            <h3>제품상담</h3>
            <h5>보이는 ARS 서비스 또는 제품기술지원</h5>
          </BoxCon>
        </Box>
        <Box onClick={() => window.scrollTo({ top: 5816 })}>
          <BoxCon>
            <span>
              <i class="fa-solid fa-credit-card"></i>
            </span>
            <h3>고객센터 연락처</h3>
            <h5>전화, 이메일, 카카오</h5>
          </BoxCon>
        </Box>
      </ServiceBoxWrap>
    </>
  );
};
