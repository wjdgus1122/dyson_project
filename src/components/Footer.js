import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";

const FooterAllWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

const FooterBg = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
`;

const FooterWrap = styled.div`
  position: absolute;
  z-index: 999;
  height: 200px;
  padding-top: 75px;
  color: ${mainStyle.blackColor};
  width: 100%;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  a {
    color: ${mainStyle.blackColor};
    opacity: 0.7;
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
`;
const FooterCenter = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 30px;
  }
  span {
    font-size: 10px;
  }
`;
const FooterRight = styled.div`
  padding-right: 120px;
  text-align: right;
  span {
    font-size: 25px;
    margin-left: 30px;
  }
  p {
    margin-top: 10px;
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
            <h3>문의 연락처</h3>
            <p>
              <span>080-300-4253</span>(수신자 부담) / <span>1588-4253</span>
              <br /> (운영시간: 월-금 오전 9시-오후 6시)
            </p>
          </FooterLeft>
          <FooterCenter>
            <h3>다이슨 코리아 유한회사</h3>
            <p>개인정보방침 | 웹사이트 사용 약관 | 사업자 정보 확인</p>
            <span>© Jeonghyeon | Yujin | Minseo | Heejeong</span>
          </FooterCenter>
          <FooterRight>
            <h3>위치 안내</h3>
            <p>서울특별시 강남구 테헤란로 142, 아크플레이스 17층 06236</p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/dyson"
            >
              <span>
                <i class="fa-brands fa-youtube"></i>
              </span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/dyson_kr/"
            >
              <span>
                <i class="fa-brands fa-instagram"></i>
              </span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ko-kr.facebook.com/DysonKorea/about/"
            >
              <span>
                <i class="fa-brands fa-square-facebook"></i>
              </span>
            </a>
          </FooterRight>
        </FooterWrap>
      </FooterAllWrap>
    </>
  );
};
