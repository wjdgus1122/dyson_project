import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";
import responsiveLogo from "./Image/responsivelogo.png";

const FooterAllWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const FooterBg = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;

const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 999;
  height: 200px;
  color: ${mainStyle.blackColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  a {
    color: ${mainStyle.blackColor};
    opacity: 0.7;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  width: 83px;
  height: 31px;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    margin: 15px 0;
  }
`;

const FooterLeft = styled.div`
  padding-left: 120px;
  h3 {
    margin-bottom: 10px;
  }
  span {
    font-size: 20px;
    font-weight: 300;
  }
  .mail {
    display: none;
  }
  @media screen and (max-width: 500px) {
    padding-left: 20px;
    width: 200px;
    line-height: 18px;
    .slash {
      display: none;
    }
    .mail {
      display: block;
      font-size: 12px;
      font-weight: 300;
    }
    h3 {
      font-size: 10px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
      font-weight: 300;
      span {
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
`;
const FooterCenter = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 60px;
    text-align: center;
    margin-left: 60px;
  }

  @media screen and (max-width: 500px) {
    h3 {
      display: none;
    }
    p {
      font-size: 10px;
      font-weight: 300;
    }
  }
`;

const FooterRight = styled.div`
  padding-right: 120px;
  text-align: right;
  position: relative;
  span {
    font-size: 25px;
    margin-left: 30px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    h3 {
      display: none;
    }
    p {
      width: 170px;
      font-size: 12px;
      font-weight: 500;
      text-align: left;
      padding-left: 20px;
    }
    position: absolute;
    bottom: 80px;
  }
`;

const Icon = styled.div`
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    position: absolute;
    left: 3%;
    span {
      font-size: 30px;
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const User = styled.div`
  display: flex;
  margin-top: -100px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 300;
  :hover {
    cursor: pointer;
  }
  span {
    margin: 0 5px;
  }
  @media screen and (max-width: 500px) {
    span {
      display: none;
    }
    display: flex;
    flex-direction: column;
    text-align: right;
    position: absolute;
    right: 20px;
    bottom: 125px;
    line-height: 25px;
  }
`;

const CopyRight = styled.div`
  font-size: 10px;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

export const Footer = () => {
  return (
    <>
      <FooterAllWrap>
        <FooterBg />

        <FooterWrap>
          <FooterLeft>
            <Logo
              style={{
                background: `url(${responsiveLogo}) no-repeat center / cover`,
              }}
            ></Logo>
            <h3>문의 연락처</h3>
            <p>
              <span>080-300-4253</span>(수신자 부담){" "}
              <span className="slash">/</span> <span>1588-4253</span>
              <br /> (운영시간: 월-금 오전 9시-오후 6시)
              <span className="mail">이메일:help@kr.dyson.com</span>
            </p>
          </FooterLeft>
          <FooterCenter>
            <h3>다이슨 코리아 유한회사</h3>
          </FooterCenter>
          <FooterRight>
            <h3>위치 안내</h3>
            <p>서울특별시 강남구 테헤란로 142, 아크플레이스 17층 06236</p>
            <Icon>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/dyson"
              >
                <span>
                  <i className="fa-brands fa-youtube"></i>
                </span>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/dyson_kr/"
              >
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ko-kr.facebook.com/DysonKorea/about/"
              >
                <span>
                  <i className="fa-brands fa-square-facebook"></i>
                </span>
              </a>
            </Icon>
          </FooterRight>
        </FooterWrap>
        <FooterBottom>
          <User>
            <p>
              개인정보방침 <span>|</span>
            </p>
            <p>
              웹사이트 사용 약관<span>|</span>
            </p>
            <p>사업자 정보 확인</p>
          </User>
          <CopyRight>
            <span>© Jeonghyeon | Yujin | Minseo | Heejeong</span>
          </CopyRight>
        </FooterBottom>
      </FooterAllWrap>
    </>
  );
};
