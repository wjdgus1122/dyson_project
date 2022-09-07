import styled from "styled-components";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productimg from "./img/section3_prd.png";
import sectionimg from "./img/section3_bg.jpg";
import { mainStyle } from "../../../styles/Globalstyle";
import { Link } from "react-router-dom";
import mosectionimg from "./img/mobile_section3bg.png";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 200px;
  position: relative;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Box = styled.div`
  width: 1360px;
  height: 225px;
  background-color: #40b109;
  position: absolute;
  top: 155px;
  right: 0;
`;
const TextWrap = styled.div`
  width: 745px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 180px;
  right: 500px;
  @media screen and (max-width: 500px) {
    width: 50%;
    top: auto;
    left: 20px;
    bottom: 340px;
    align-items: flex-start;
  }
`;
const SubTitle = styled.h3`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    font-weight: 700;
    writing-mode: vertical-rl;
    letter-spacing: 10px;
    color: white;
    position: absolute;
    top: 75px;
    right: 20px;
    span {
      margin: 70px 0;
    }
  }
`;
const Title = styled.h1`
  font-size: 75px;
  font-weight: 700;
  line-height: 110px;
  margin-bottom: 45px;
  span {
    color: ${mainStyle.fontColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 45px;
    line-height: 46px;
    margin-bottom: 60px;
    span {
      color: ${mainStyle.mainColor};
    }
  }
`;
const ProductBtn = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  svg {
    color: ${mainStyle.mainColor};
  }
  position: relative;
  z-index: 99;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const ProductImg = styled.img`
  width: 540px;
  height: 970px;
  position: absolute;
  top: 0;
  right: 200px;
  @media screen and (max-width: 500px) {
    width: 450px;
    height: 595px;
    top: auto;
    right: -20px;
    bottom: 0;
  }
`;
const MoSection = styled.div`
  display: none;
  width: 100%;
  height: 150vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const Section3 = () => {
  return (
    <>
      <Section
        style={{ background: `url(${sectionimg}) no-repeat center/cover` }}
      >
        <Box />
        <TextWrap>
          <SubTitle>'다이슨' 하나로 깔끔하게</SubTitle>
          <Title>
            <span>v15</span> detect complite
          </Title>
          <Link to={"/product/detail"}>
            <ProductBtn>
              제품보러가기 <FontAwesomeIcon icon={faCaretRight} />
            </ProductBtn>
          </Link>
        </TextWrap>

        <ProductImg src={`${productimg}`} />
      </Section>
      <MoSection
        style={{ background: `url(${mosectionimg}) no-repeat left 0/cover` }}
      >
        <SubTitle>
          다이슨 <span>하나로</span> 깔끔하게
        </SubTitle>
        <TextWrap>
          <Title>
            <span>v15</span> <br />
            detect complite
          </Title>
          <Link to={"/product/detail"}>
            <ProductBtn>
              제품보러가기 <FontAwesomeIcon icon={faCaretRight} />
            </ProductBtn>
          </Link>
        </TextWrap>

        <ProductImg src={`${productimg}`} />
      </MoSection>
    </>
  );
};
