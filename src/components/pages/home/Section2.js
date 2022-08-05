import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import sectionimg from "./img/section2.jpg";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  margin: 200px 0;
  position: relative;
  @media screen and (max-width: 500px) {
    margin: 0 0 100px 0;
  }
`;
const MainImg = styled.div`
  width: 1585px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 50%;
    position: absolute;
    top: auto;
    bottom: 0;
  }
`;

const TextWrap = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 100px;
  right: 120px;
  z-index: 99;
  @media screen and (max-width: 500px) {
    height: 50%;
    position: absolute;
    top: 0;
    right: 50px;
    justify-content: center;
    align-items: center;
  }
`;
const SubTitle = styled.h3`
  font-size: 50px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
const Title = styled.h1`
  font-size: 80px;
  font-weight: 700;
  span {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 26px;
    line-height: 37px;
    margin-top: 15px;
    margin-bottom: 45px;
  }
`;
const Text = styled.p`
  font-size: 30px;
  font-weight: 500;
  line-height: 44px;
  text-align: end;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 45px;
  }
`;
const ProductBtn = styled.div`
  font-size: 30px;
  font-weight: 700;
  svg {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Section2 = () => {
  return (
    <Section>
      <MainImg
        style={{ background: `url(${sectionimg}) no-repeat center/cover` }}
      />
      <TextWrap>
        <SubTitle>에어컨이 과하다면,</SubTitle>
        <Title>
          시원한 <span>공기청정기</span> 어떠세요?
        </Title>
        <Text>
          다이슨 공기청정기는 공기를 정화시킬 뿐만아니라 <br />
          강력한 공기 흐름을 생성해 시원하게 해줍니다.
        </Text>
        <Link to={"/product"}>
          <ProductBtn>
            제품보러가기 <FontAwesomeIcon icon={faCaretRight} />
          </ProductBtn>
        </Link>
      </TextWrap>
    </Section>
  );
};
