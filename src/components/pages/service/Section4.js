import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import respontell from "./Image/respontell.png";

const Section4Wrap = styled.div`
  margin-top: 130px;
  h5 {
    color: ${mainStyle.mainColor};
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    margin: 50px 0 200px 0;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    h5 {
      padding: ${mainStyle.mopadding};
    }
  }
`;

const Section4Banner = styled.div`
  @media screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

const MobileBanner = styled.div`
  width: 100%;
  height: 78px;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const DysonContact = styled.div`
  margin-top: 80px;
  padding: 0 300px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: ${mainStyle.mopadding};
    flex-direction: column;
  }
`;
const Box = styled.div`
  text-align: center;
  width: 30%;
  :nth-child(2) {
    border-left: 2px solid rgba(29, 29, 29, 0.5);
    border-right: 2px solid rgba(29, 29, 29, 0.5);
    width: 35%;
  }
  @media screen and (max-width: 500px) {
    :nth-child(2) {
      width: 100%;
      border: none;
    }
    width: 100%;
  }
`;

const BoxTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const BoxCon = styled.p`
  span {
    font-size: 26px;
    color: ${mainStyle.mainColor};
  }
  p {
    margin-top: 15px;
    font-size: 18px;
    line-height: 25px;
  }
`;

const DysonOnline = styled.div`
  width: 100%;
  height: 350px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;
const OnlineTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    margin: 100px 0;
  }
`;
const OnlineBoxWrap = styled.div`
  padding: 0 300px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 50px 0;
  }
`;
const OnlineBox = styled.div`
  margin-right: 100px;
  :nth-child(4) {
    margin-right: 0;
  }

  span {
    font-size: 35px;
    color: ${mainStyle.mainColor};
  }
  h3 {
    font-size: 20px;
    color: ${mainStyle.mainColor};
    font-weight: 500;
    margin: 10px 0;
  }
  p {
    font-size: 15px;
    font-weight: 100;
    line-height: 20px;
  }
  h6 {
    font-size: 12px;
    font-weight: 100;
    margin-top: 5px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-right: 0;
    h3 {
      font-size: 25px;
      font-weight: 500;
      margin: 17px 0;
    }
    span {
      font-size: 25px;
    }
    p {
      font-size: 20px;
      line-height: 22px;
      font-weight: 100;
      margin-bottom: 60px;
    }
    h6 {
      margin-top: -50px;
      font-size: 16px;
      font-weight: 100;
    }
  }
`;

export const Section4 = () => {
  return (
    <>
      <Container />
      <Section4Wrap>
        <Section4Banner>
          <img
            src={require("./Image/section4.png")}
            width="100%"
            alt="dyson service center"
          />
          <MobileBanner
            style={{
              background: `url(${respontell}) no-repeat center / cover`,
            }}
          />
        </Section4Banner>
        <DysonContact>
          <Box>
            <BoxTitle>전화</BoxTitle>
            <BoxCon>
              <span>
                1588-4253
                <br />
                080-300-4253
              </span>
              <br />
              <p>(수신자 부담)</p>
            </BoxCon>
          </Box>
          <Box>
            <BoxTitle>이메일</BoxTitle>
            <BoxCon>
              <span>help@kr.dyson.com</span> <br />
              <p>
                {" "}
                이메일에 아래 정보를 기재하시면
                <br /> 더욱 원활한 서비스가 가능합니다. <br />: 이름, 연락처,
                제품명 및 시리얼 번호,
                <br /> 도움이 필요하신 사항
              </p>
            </BoxCon>
          </Box>
          <Box>
            <BoxTitle>카카오톡</BoxTitle>
            <BoxCon>
              <span>ID: dysonkr</span>
              <br />
              <p>
                카카오톡을 통해서도
                <br />
                상담하실 수 있습니다.
              </p>
            </BoxCon>
          </Box>
        </DysonContact>
        <h5>운영시간: 월요일 - 금요일 오전 9시부터 오후 6시</h5>
        <DysonOnline>
          <OnlineTitle>다이슨 온라인몰 혜택</OnlineTitle>
          <OnlineBoxWrap>
            <OnlineBox>
              <span>
                <i class="fa-solid fa-cart-flatbed"></i>
              </span>
              <h3>무료배송</h3>
              <p>
                다이슨 제품과 부품을 구매하실 때, <br />
                배송비는 무료입니다.
              </p>
            </OnlineBox>
            <OnlineBox>
              <span>
                <i class="fa-solid fa-screwdriver-wrench"></i>
              </span>
              <h3>무상 A/S 제공</h3>
              <p>
                공식 온라인몰에서 제품 구매 시, <br />
                2년 동안 무상 보증과 A/S를 제공합니다. <br />
                (조명 제품은 5년)
              </p>
            </OnlineBox>
            <OnlineBox>
              <span>
                <i class="fa-solid fa-battery-full"></i>
              </span>
              <h3>배터리 무상 보증</h3>
              <p>
                다이슨의 배터리 2년 보증 정책으로 <br />
                제품을 더욱 안정적으로 사용하세요. <br />
                V7 및 V8 라인 전 제품 배터리의 경우, <br />
                1년 보증 정책을 운영하고 있습니다.
              </p>
            </OnlineBox>
            <OnlineBox>
              <span>
                <i class="fa-solid fa-credit-card"></i>
              </span>
              <h3>카드 무이자 할부</h3>
              <p>7월 카드사 무이자 할부</p>
              <h6>
                {" "}
                *법인/체크/기프트카드 결제 시, <br />
                무이자 적용 제외됩니다.
              </h6>
            </OnlineBox>
          </OnlineBoxWrap>
        </DysonOnline>
      </Section4Wrap>
    </>
  );
};
