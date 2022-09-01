import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import {
  Air,
  HairDry,
  HairMulti,
  HairStraight,
  Humid,
  Vacuums,
  VacuumsVseries,
} from "../../../TextDB";
import { Container } from "../../Container";
import { Link } from "react-router-dom";

const TitleWrap = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
  /* color: #ff5555; */
  @media screen and (max-width: 500px) {
    margin-top: 150px;
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
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 60px;
  }
`;

const Con = styled.div`
  width: 500px;
  @media screen and (max-width: 500px) {
    width: 89vw;
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
  padding-bottom: 120px;
  border-bottom: 1px solid ${mainStyle.fontColor};
  opacity: 0.5;
  font-size: 18px;
  @media screen and (max-width: 500px) {
    padding-bottom: 60px;
  }
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

export const Section2 = () => {
  return (
    <Container>
      <TitleWrap style={{ color: "#ff5555" }} id="hair">
        <Title>
          <span>hair care</span>다이슨 헤어케어
        </Title>
        <Desc>스타일 타협 없이, 정교한 스타일링</Desc>
      </TitleWrap>
      <Category style={{ color: "#ff5555", opacity: "0.7" }}>
        멀티 스타일러
      </Category>
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
      <Category style={{ color: "#ff5555", opacity: "0.7" }}>
        헤어 스트레이트너
      </Category>
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
      <Category style={{ color: "#ff5555", opacity: "0.7" }}>
        헤어 드라이어
      </Category>
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

      <TitleWrap style={{ color: "#40b109" }} id="vacuum">
        <Title>
          <span>vacuums</span>다이슨 무선청소기
        </Title>
        <Desc>당신의 간편한 일상을 위한 선택</Desc>
      </TitleWrap>
      <Category style={{ color: "#40b109", opacity: "0.7" }}>v시리즈</Category>
      <ConWrap>
        {VacuumsVseries.map((con) => (
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
      <Category style={{ color: "#40b109", opacity: "0.7" }}>기타</Category>
      <ConWrap>
        {Vacuums.map((con) => (
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
      {/* vacuums */}

      <TitleWrap style={{ color: "#0087f5" }} id="air">
        <Title>
          <span>air purifiers</span>다이슨 공기청정기
        </Title>
        <Desc>공기를 정화하고 시원하게</Desc>
      </TitleWrap>
      <Category style={{ color: "#0087f5", opacity: "0.7" }}>
        공기청정기
      </Category>
      <ConWrap>
        {Air.map((con) => (
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
      <Category style={{ color: "#0087f5", opacity: "0.7" }}>가습기</Category>
      <ConWrap>
        {Humid.map((con) => (
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
      {/* air */}
    </Container>
  );
};
