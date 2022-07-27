import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";

const TitleWrap = styled.div`
  margin-left: 30px;
  margin-bottom: 40px;
  display: flex;
  align-items: flex-end;
`;
const Title = styled.div`
  font-size: 150px;
  font-weight: 500;
  color: ${mainStyle.fontColor};
`;
const STitle = styled.div`
  font-size: 55px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
  margin-left: 40px;
`;
const ProductWrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: beige;
  display: flex;
  justify-content: space-between;
`;
const LeftCon = styled.div`
  width: 32%;
  height: 100%;
  background-color: salmon;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 100%;
  height: 48%;
  background-color: black;
`;
const CenterCon = styled.div`
  width: 32%;
  height: 100%;
  background-color: salmon;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightCon = styled.div`
  width: 32%;
  height: 100%;
  background-color: salmon;
`;

export const Section2 = () => {
  return (
    <>
      <TitleWrap>
        <Title>Product</Title>
        <STitle>제품</STitle>
      </TitleWrap>
      <Container>
        <ProductWrap>
          <LeftCon>
            <Con />
            <Con />
          </LeftCon>
          <CenterCon>
            <Con />
            <Con />
          </CenterCon>
          <RightCon />
        </ProductWrap>
      </Container>
    </>
  );
};
