import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import { Link } from "react-router-dom";
import box1 from "./img/box1.png";
import box2 from "./img/box2.png";

const Wrap = styled.div`
  width: 100%;
  height: 120vh;
  position: relative;
`;
const TitleWrap = styled.div`
  margin-bottom: 40px;
  padding-top: 285px;
`;
const Title = styled.div`
  font-size: 100px;
  font-weight: 500;
  font-family: ${mainStyle.fontType};
  font-weight: 900;
  color: ${mainStyle.fontColor};
`;
const STitle = styled.div`
  font-size: 55px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
  margin-top: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BCon = styled.div`
  width: 655px;
  height: 310px;
  border: 1px solid ${mainStyle.mainColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 630px;
  height: 200px;
`;
const SBox = styled.div`
  width: 365px;
  height: 150px;
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

export const Section5 = () => {
  return (
    <Wrap>
      <Container>
        <TitleWrap>
          <Title>Event</Title>
          <STitle>리뷰이벤트</STitle>
        </TitleWrap>
        <TextWrap>
          <Text>
            지금 다이슨 리뷰 이벤트 참여하면 참여자 전원 액세서리 바우처 증정
          </Text>
          <Link to={"/community"}>
            <TextBtn>리뷰 작성하러 가기</TextBtn>
          </Link>
        </TextWrap>
        <ProductImg />
        <BoxWrap>
          <SCon>
            <SBox
              style={{ background: `url(${box2}) no-repeat center/cover` }}
            />{" "}
          </SCon>
          <BCon>
            <Box
              style={{ background: `url(${box1}) no-repeat center/cover` }}
            />
            <Best>Best</Best>
          </BCon>
          <SCon>
            <SBox
              style={{ background: `url(${box2}) no-repeat center/cover` }}
            />{" "}
          </SCon>
        </BoxWrap>
      </Container>
    </Wrap>
  );
};
