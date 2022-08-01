import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { HairDry, HairMulti, HairStraight, ProductDB } from "../../../TextDB";
import { Container } from "../../Container";
import { Link } from "react-router-dom";

const TitleWrap = styled.div`
  margin-top: 200px;
  color: #ff5555;
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
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

const Category = styled.h3`
  font-size: 20px;
  color: #808080;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const ConWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Con = styled.div`
  width: 500px;
`;

const PrdctImg = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
`;

const PrdctDescWrap = styled.div`
  padding: 15px;
`;

const PrdctTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const PrdctDesc = styled.div`
  height: 120px;
  border-bottom: 1px solid #808080;
  font-size: 12px;
`;

const PrdctColor = styled.div``;

const PrdctPrice = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #808080;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const Btn = styled.div`
  width: 50%;
  height: 50px;
  background-color: ${mainStyle.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  font-size: 20px;
  font-weight: 600;
`;

export const Section2 = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>
          <span>hair care</span>다이슨 헤어케어
        </Title>
        <Desc>스타일 타협 없이, 정교한 스타일링</Desc>
      </TitleWrap>
      <Category>멀티 스타일러</Category>
      <ConWrap>
        {HairMulti.map((con) => (
          <Con key={con.id}>
            <Link to="#">
              <PrdctImg>
                <img src={con.imgUrl} />
              </PrdctImg>
            </Link>
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
          </Con>
        ))}
      </ConWrap>
      <Category>헤어 스트레이트너</Category>
      <ConWrap>
        {HairStraight.map((con) => (
          <Con key={con.id}>
            <Link to="#">
              <PrdctImg>
                <img src={con.imgUrl} />
              </PrdctImg>
            </Link>
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
          </Con>
        ))}
      </ConWrap>
      <Category>헤어 드라이어</Category>
      <ConWrap>
        {HairDry.map((con) => (
          <Con key={con.id}>
            <Link to="#">
              <PrdctImg>
                <img src={con.imgUrl} />
              </PrdctImg>
            </Link>
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
          </Con>
        ))}
      </ConWrap>
    </Container>
  );
};
