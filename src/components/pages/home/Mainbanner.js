import styled from "styled-components";
import { Container } from "../../Container";
import main_1 from "./img/main_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../../styles/Globalstyle";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const TextWrap = styled.div`
  width: 435px;
  position: relative;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 100;
  color: white;
  line-height: 60px;
  padding-top: 220px;
`;
const ProductView = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: white;
  position: absolute;
  right: 10px;
  margin-top: 40px;
`;
const BottomWrap = styled.div`
  position: absolute;
  right: 130px;
  bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  &:first-child {
    margin-bottom: 20px;
  }
  svg {
    color: ${mainStyle.mainColor};
  }
`;

export const Mainbanner = () => {
  return (
    <Wrap style={{ background: `url(${main_1})` }}>
      <Container>
        <TextWrap>
          <Title>
            과도한 열 손상이 없는 자연스러운 스타일링, 그리고 잔머리 정리까지
          </Title>
          <Link to={"/product"}>
            <ProductView>
              제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
            </ProductView>
          </Link>
        </TextWrap>
        <BottomWrap>
          <Text>
            코안다 기술이란? <FontAwesomeIcon icon={faCaretRight} />
          </Text>
          <Text>
            추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
          </Text>
        </BottomWrap>
      </Container>
    </Wrap>
  );
};
