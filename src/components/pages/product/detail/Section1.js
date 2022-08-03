import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../../../styles/Globalstyle";
import { Logo } from "./Image/Logo";
import product from "./Image/product.png";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const PrdtImg = styled.div``;

const PinkBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  /* transform: translateY(20px); */
  width: 930px;
  height: 250px;
  background-color: ${mainStyle.mainColor};
  opacity: 0.2;
`;

const NameWrap = styled.div`
  position: absolute;
  top: 70px;
  left: 240px;
  svg {
    width: 100px;
  }
`;

const Name1 = styled.h1`
  font-size: 80px;
  font-weight: 900;
  color: #333;
`;

const Desc1 = styled.div`
  font-size: 40px;
  font-weight: 100;
  transform: rotate(90deg);
  opacity: 0.4;
  position: absolute;
  top: 550px;
  left: 70px;
`;

const Img = styled.div`
  width: 600px;
  height: 90vh;
  position: absolute;
  top: 0;
  left: 350px;
`;

const PrdtDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const DescWrap = styled.div`
  margin-left: 100px;
`;

const Name2 = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Desc2 = styled.div`
  width: 50%;
  height: 100px;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.5;
`;

const Color = styled.div`
  display: flex;
  margin-bottom: 30px;

  p {
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
      content: "";
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid ${mainStyle.mainColor};
      margin-bottom: 5px;
      /* opacity: 0; */
    }
    &::after {
      content: "";
      width: 60%;
      height: 4px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background-color: ${mainStyle.mainColor};
      margin-top: 5px;
      /* opacity: 0; */
    }
    &:hover ::before,
    &:hover ::after {
      opacity: 1;
    }
  }
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Btn = styled.div`
  background-color: ${mainStyle.mainColor};
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.7;
  margin-bottom: 150px;
  transition: 0.3s;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  &:hover {
    opacity: 1;
  }
`;

const ThumbnailImg = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
    height: 200px;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    background-color: #808080;
  }
`;

export const Section1 = () => {
  return (
    <Wrap>
      <PrdtImg>
        <PinkBox />
        <NameWrap>
          <Logo style={{ with: "10px" }} />
          <Name1>v15 detect</Name1>
        </NameWrap>
        <Desc1>
          다이슨의 가장 강력하고
          <br />
          인텔리전트한 무선 청소기
        </Desc1>
        <Img
          style={{
            background: `url(${product}) no-repeat center / cover`,
          }}
        />
      </PrdtImg>
      <PrdtDesc>
        <DescWrap>
          <Name2>다이슨 V15 디텍트</Name2>
          <Desc2>
            레이저가 마룻바닥의 보이지 않던 먼지를 보여줍니다. 피조 센서가 먼지
            입자의 크기와 양을 지속적으로 측정해 필요에 따라 자동으로 흡입력을
            조절하며 LCD 스크린은 실시간으로 흡입되는 먼지를 보여줍니다.
          </Desc2>
          <Color>
            <p>옐로 / 니켈</p>
            <p>골드 / 골드</p>
          </Color>
          <Price>₩699,000</Price>
          <Btn>
            <FontAwesomeIcon icon={faShoppingBag} />
            장바구니 담기
          </Btn>
          <ThumbnailImg>
            <div></div>
            <div></div>
            <div></div>
          </ThumbnailImg>
        </DescWrap>
      </PrdtDesc>
    </Wrap>
  );
};
