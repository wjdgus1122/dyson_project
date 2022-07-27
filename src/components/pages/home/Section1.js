import styled from "styled-components";
import { Container } from "../../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbed,
  faCreditCard,
  faMobileScreen,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../../styles/Globalstyle";

const Section = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConWrap = styled.div`
  width: 1540px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 285px;
  svg {
    font-size: 30px;
    color: ${mainStyle.mainColor};
  }
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: ${mainStyle.mainColor};
  margin: 20px 0;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 100;
  line-height: 24px;
  color: ${mainStyle.fontColor};
`;

export const Section1 = () => {
  return (
    <Container>
      <Section>
        <ConWrap>
          <Con>
            <FontAwesomeIcon icon={faCartFlatbed} />
            <Title>무료배송</Title>
            <Text>다이슨 제품과 부품을 구매하실 때, 배송비는 무료입니다.</Text>
          </Con>
          <Con>
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <Title>무상 A/S 제공</Title>
            <Text>
              공식 온라인몰에서 제품 구매 시, 2년 동안 무상 보증과 A/S를
              제공합니다. (조명 제품은 5년)
            </Text>
          </Con>
          <Con>
            <FontAwesomeIcon icon={faMobileScreen} />
            <Title>배터리 2년 보증</Title>
            <Text>
              다이슨의 배터리 2년 보증 정책으로 제품을 더욱 안정적으로
              사용하세요. V7 및 V8 라인 전 제품 배터리의 경우, 1년 보증 정책을
              운영하고 있습니다.
            </Text>
          </Con>
          <Con>
            <FontAwesomeIcon icon={faCreditCard} />
            <Title>카드 무이자 할부</Title>
            <Text>
              7월 카드사 무이자 할부
              <span>
                *법인/체크/기프트카드 결제 시, 무이자 적용 제외됩니다.
              </span>
            </Text>
          </Con>
        </ConWrap>
      </Section>
    </Container>
  );
};
