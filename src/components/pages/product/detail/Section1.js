import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../../../styles/Globalstyle";

const Wrap = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

const PrdtImg = styled.div``;

const PinkBox = styled.div`
  /* position: absolute;
  top: 50px;
  left: 0; */
  transform: translateY(50px);
  width: 30%;
  height: 300px;
  background-color: ${mainStyle.mainColor};
  opacity: 0.2;
`;

const Logo = styled.div``;

const Name1 = styled.div``;

const Desc1 = styled.div``;

const PrdtDesc = styled.div``;

const Name2 = styled.div``;

const Desc2 = styled.div``;

const Color = styled.div``;

const Price = styled.div``;

const Btn = styled.div``;

const ThumbnailImg = styled.div``;

export const Section1 = () => {
  return (
    <Wrap>
      <PrdtImg>
        <PinkBox>
          <Logo></Logo>
          <Name1>v15 detect</Name1>
        </PinkBox>
        <Desc1>다이슨의 가장 강력하고 인텔리전트한 무선 청소기</Desc1>
      </PrdtImg>
      <PrdtDesc>
        <Name2>다이슨 V15 디텍트</Name2>
        <Desc2>
          레이저가 마룻바닥의 보이지 않던 먼지를 보여줍니다. 피조 센서가 먼지
          입자의 크기와 양을 지속적으로 측정해 필요에 따라 자동으로 흡입력을
          조절하며 LCD 스크린은 실시간으로 흡입되는 먼지를 보여줍니다.
        </Desc2>
        <Color>
          <p>옐로/니켈</p>
          <p>골드/골드</p>
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
      </PrdtDesc>
    </Wrap>
  );
};
