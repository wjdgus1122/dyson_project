import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";

const Wrap = styled.div`
  width: 100%;
  height: 120vh;
  position: relative;
`;
const TitleWrap = styled.div`
  margin-left: 30px;
  margin-bottom: 40px;
  padding-top: 285px;
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
const TextWrap = styled.div`
  width: 555px;
  color: ${mainStyle.blackColor};
  margin-top: 70px;
`;
const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
`;
const TextBtn = styled.div`
  font-size: 17px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid ${mainStyle.blackColor};
  margin-top: 50px;
`;
const ProductImg = styled.div`
  width: 620px;
  height: 395px;
  background-color: beige;
  position: absolute;
  top: 285px;
  right: 130px;
`;
const BoxWrap = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const SCon = styled.div`
  width: 455px;
  height: 200px;
  border: 1px solid ${mainStyle.mainColor};
`;
const BCon = styled.div`
  width: 655px;
  height: 310px;
  border: 1px solid ${mainStyle.mainColor};
  position: relative;
`;
const Best = styled.div`
  width: 135px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  color: white;
  background-color: #ff8aca;
  position: absolute;
  right: -20px;
  top: -30px;
`;

export const Section3 = () => {
  return (
    <Wrap>
      <TitleWrap>
        <Title>Event</Title>
        <STitle>리뷰이벤트</STitle>
      </TitleWrap>
      <Container>
        <TextWrap>
          <Text>
            지금 다이슨 리뷰 이벤트 참여하면 참여자 전원 액세서리 바우처 증정
          </Text>
          <TextBtn>리뷰 작성하러 가기</TextBtn>
        </TextWrap>
        <ProductImg />
        <BoxWrap>
          <SCon />
          <BCon>
            <Best>Best</Best>
          </BCon>
          <SCon />
        </BoxWrap>
      </Container>
    </Wrap>
  );
};
