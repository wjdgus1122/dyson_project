import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import webbanner from "./Image/webbanner.png";
import momainbanner from "./Image/mobanner.png";
import { Container } from "../../Container";

const MainBannerWrap = styled.div`
  width: 100%;
  height: 60%;
`;

const WebMainBanner = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 570px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileBanner = styled.div`
  width: 100%;
  height: 430px;
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
    height: 550px;
    margin-top: -30px;
  }
`;

const ServiceBoxWrap = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    margin-top: 32px;
    width: 100%;
    padding: 0;
    display: flex;

    flex-direction: column;
  }
`;
const Box = styled.div`
  width: 23%;
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
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 62px;
    margin-bottom: 28px;
    align-items: center;
    span {
      margin-top: 5px;
      font-size: 25px;
    }
    h3 {
      font-size: 18px;
      margin: 10px 0;
    }
  }
`;

const BoxCon = styled.div`
  padding: 0 80px;
  span {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    display: flex;
    h5 {
      display: none;
    }
    span {
      margin-right: 20px;
    }
  }
`;

export const MainBanner = () => {
  const handleCenter = () => {
    if (window.innerWidth > 500) {
      window.scrollTo({ top: 1010, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 837, behavior: "smooth" });
    }
  };
  const handleAS = () => {
    if (window.innerWidth > 500) {
      window.scrollTo({ top: 2596, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2330, behavior: "smooth" });
    }
  };

  const handleCS = () => {
    if (window.innerWidth > 500) {
      window.scrollTo({ top: 4100, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 3528, behavior: "smooth" });
    }
  };
  const handleTell = () => {
    if (window.innerWidth > 500) {
      window.scrollTo({ top: 5558, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 4915, behavior: "smooth" });
    }
  };

  return (
    <>
      <MainBannerWrap>
        <WebMainBanner
          style={{
            background: `url(${webbanner}) no-repeat center / cover`,
          }}
        ></WebMainBanner>
        <MobileBanner
          style={{
            background: `url(${momainbanner}) no-repeat center / cover`,
          }}
        />
      </MainBannerWrap>
      <Container>
        <ServiceBoxWrap>
          <Box onClick={handleCenter}>
            <BoxCon>
              <span>
                <i className="fa-solid fa-warehouse"></i>
              </span>
              <h3>다이슨 서비스센터</h3>
              <h5>
                7개의 다이슨 전문 서비스 센터에서 고객님을 위해 대기하고
                있습니다.
              </h5>
            </BoxCon>
          </Box>
          <Box onClick={handleAS}>
            <BoxCon>
              <span>
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </span>
              <h3>다이슨 수리 서비스</h3>
              <h5>전국 어디서나 택배를 이용해 편리하게 수리 받으세요.</h5>
            </BoxCon>
          </Box>
          <Box onClick={handleCS}>
            <BoxCon>
              <span>
                <i className="fa-solid fa-mobile-screen"></i>
              </span>
              <h3>제품상담</h3>
              <h5>보이는 ARS 서비스 또는 제품기술지원</h5>
            </BoxCon>
          </Box>
          <Box onClick={handleTell}>
            <BoxCon>
              <span>
                <i className="fa-solid fa-credit-card"></i>
              </span>
              <h3>고객센터 연락처</h3>
              <h5>전화, 이메일, 카카오</h5>
            </BoxCon>
          </Box>
        </ServiceBoxWrap>
      </Container>
    </>
  );
};
