import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
const Wrap = styled.div`
  margin-top: 130px;
  h5 {
    color: ${mainStyle.mainColor};
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    margin: 50px 0 200px 0;
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
`;
const OnlineTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;
const OnlineBoxWrap = styled.div`
  padding: 0 300px;
  display: flex;
  justify-content: center;
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
`;

export const Section3 = () => {
  return (
    <Wrap>
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
              *법인/체크/기프트카드 결제 시, <br />
              무이자 적용 제외됩니다.
            </h6>
          </OnlineBox>
        </OnlineBoxWrap>
      </DysonOnline>
    </Wrap>
  );
};
