import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import { Link } from "react-router-dom";
import box1 from "./img/box1.png";
import box2 from "./img/box2.png";
import pdimg from "./img/section5.png";

const Wrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 200px;
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;
const BgCircle = styled.div`
  width: 615px;
  height: 615px;
  border-radius: 50%;
  background-color: #ff8aca;
  position: absolute;
  top: 210px;
  left: -100px;
`;
const TitleWrap = styled.div`
  margin-bottom: 40px;
  padding-top: 285px;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    display: flex;
    padding-top: 160px;
    margin-bottom: 0;
  }
`;
const Title = styled.div`
  font-size: 100px;
  font-family: ${mainStyle.fontType};
  font-weight: 900;
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    font-size: 47px;
  }
`;
const STitle = styled.div`
  font-size: 55px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 17px;
    margin-left: 20px;
  }
`;
const TextWrap = styled.div`
  width: 555px;
  color: ${mainStyle.blackColor};
  margin-top: 70px;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    width: 170px;
    margin-top: 20px;
  }
`;
const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 18px;
  }
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
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 20px;
    border-radius: 10px;
    font-size: 5px;
    font-weight: 700;
    margin-top: 20px;
  }
`;
const ProductImg = styled.div`
  width: 620px;
  height: 395px;
  background-color: beige;
  position: absolute;
  top: 285px;
  right: 130px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const BoxWrap = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;
const SCon = styled.div`
  width: 455px;
  height: 200px;
  border: 1px solid ${mainStyle.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const BCon = styled.div`
  width: 655px;
  height: 310px;
  border: 1px solid ${mainStyle.mainColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 270px;
    height: 105px;
  }
`;
const Box = styled.div`
  width: 630px;
  height: 200px;
  @media screen and (max-width: 500px) {
    width: 265px;
    height: 85px;
  }
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
  @media screen and (max-width: 500px) {
    width: 35px;
    height: 20px;
    font-size: 6px;
    top: -10px;
    right: -17px;
  }
`;

export const Section5 = () => {
  return (
    <Wrap>
      <Container>
        <BgCircle />
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
        <ProductImg
          style={{ background: `url(${pdimg}) no-repeat center/cover` }}
        />
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
