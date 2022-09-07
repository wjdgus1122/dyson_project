import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { HairDry, HairMulti, HairStraight } from "../../../TextDB";
import { Link } from "react-router-dom";

const TitleWrap = styled.div`
  margin-top: 200px;
  /* color: #ff5555; */
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  letter-spacing: -5px;
  span {
    font-size: 80px;
    font-weight: 900;
    font-family: ${mainStyle.fontType};
    margin-right: 20px;
  }
  margin: 10px 0;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    letter-spacing: -4px;
    span {
      font-size: 50px;
      margin-right: 10px;
    }
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const Category = styled.h3`
  font-size: 20px;
  color: #808080;
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Con = styled.div`
  width: 500px;
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

const PrdctImg = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
`;

const PrdctDescWrap = styled.div`
  padding: 15px 0;
  color: ${mainStyle.fontColor};
  /* width: 500px; */
`;

const PrdctTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const PrdctDesc = styled.div`
  height: 120px;
  border-bottom: 1px solid ${mainStyle.fontColor};
  opacity: 0.5;
  font-size: 18px;
`;

const PrdctPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${mainStyle.fontColor};
  margin-top: 50px;
  margin-bottom: 10px;
`;

const Btn = styled.div`
  width: 50%;
  height: 50px;
  background-color: rgba(${mainStyle.mainRgbColor}, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.5; */
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 50px;
  &:hover {
    background-color: rgba(${mainStyle.mainRgbColor}, 1);
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 30px;
  }
`;

export const Hair = () => {
  return (
    <>
      <TitleWrap style={{ color: "#ff5555" }}>
        <Title>
          <span>hair care</span>다이슨 헤어케어
        </Title>
        <Desc>스타일 타협 없이, 정교한 스타일링</Desc>
      </TitleWrap>
      <Category>멀티 스타일러</Category>
      <ConWrap>
        {HairMulti.map((con) => (
          <Con key={con.id}>
            <Link to="/product/detail">
              <PrdctImg>
                <img src={con.imgUrl} />
              </PrdctImg>
              <PrdctDescWrap>
                <PrdctTitle>{con.title}</PrdctTitle>
                <PrdctDesc>{con.desc[0]}</PrdctDesc>
                {/* {con.color.map((color) => (
            <PrdctColor>{}</PrdctColor>
          ))} */}
                <PrdctPrice>₩ {con.price}</PrdctPrice>
                <Link to="#">
                  <Btn>더 알아보기</Btn>
                </Link>
              </PrdctDescWrap>
            </Link>
          </Con>
        ))}
      </ConWrap>
      <Category>헤어 스트레이트너</Category>
      <ConWrap>
        {HairStraight.map((con) => (
          <Con key={con.id}>
            <Link to="/product/detail">
              <PrdctImg>
                <img src={con.imgUrl} />
              </PrdctImg>
              <PrdctDescWrap>
                <PrdctTitle>{con.title}</PrdctTitle>
                <PrdctDesc>{con.desc[0]}</PrdctDesc>
                {/* {con.color.map((color) => (
            <PrdctColor>{}</PrdctColor>
          ))} */}
                <PrdctPrice>₩ {con.price}</PrdctPrice>
                <Btn>더 알아보기</Btn>
              </PrdctDescWrap>
            </Link>
          </Con>
        ))}
      </ConWrap>
      <Category>헤어 드라이어</Category>
      <ConWrap>
        {HairDry.map((con) => (
          <Con key={con.id}>
            <Link to="/product/detail">
              <PrdctImg>
                <img src={con.imgUrl} />
              </PrdctImg>
              <PrdctDescWrap>
                <PrdctTitle>{con.title}</PrdctTitle>
                <PrdctDesc>{con.desc[0]}</PrdctDesc>
                {/* {con.color.map((color) => (
            <PrdctColor>{}</PrdctColor>
          ))} */}
                <PrdctPrice>₩ {con.price}</PrdctPrice>
                <Btn>더 알아보기</Btn>
              </PrdctDescWrap>
            </Link>
          </Con>
        ))}
      </ConWrap>
      {/* hair */}
    </>
  );
};
