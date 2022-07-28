import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { ProductDB } from "../../../TextDB";
import { Container } from "../../Container";
import { Link } from "react-router-dom";

const TitleWrap = styled.div`
  margin-top: 200px;
  color: #ff5555;
`;

const Title = styled.div`
  font-size: 80px;
  font-family: ${mainStyle.fontType};
  font-weight: 900;
  letter-spacing: -5px;
  span {
    margin-left: 20px;
    font-size: 30px;
  }
  margin: 10px 0;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 100px;
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

const PrdctTitle = styled.div``;

const PrdctDesc = styled.div``;

const PrdctColor = styled.div``;

const PrdctPrice = styled.div``;

const Btn = styled.div``;

export const Section2 = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>
          hair care<span>다이슨 헤어케어</span>
        </Title>
        <Desc>스타일 타협 없이, 정교한 스타일링</Desc>
      </TitleWrap>
      <ConWrap>
        {ProductDB.map((con) => (
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
