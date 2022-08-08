import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import mainbanner_img from "./img/mainbanner_img.png";
import review from "./img/review.png";
import mob_banner from "./img/mob_banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "../../Container";

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
`;

const Img = styled.div`
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobImg = styled.div`
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    height: 100vh;
  }
`;

const SubWrap = styled.div`
  padding-top: 120px;
  text-align: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SubDesc = styled.div`
  color: ${mainStyle.mainColor};
  margin-bottom: 5px;
  font-size: 22px;
`;

const SubTitle = styled.div`
  color: white;
  font-size: 30px;
`;

const ConWrap = styled.div`
  padding: 100px 300px 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 150px 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ReviewImg = styled.div`
  width: 649px;
  height: 397px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 271px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 100px;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  font-weight: 500;
  .en {
    color: ${mainStyle.mainColor};
    margin-right: 10px;
    font-family: ${mainStyle.fontType};
    font-size: 100px;
    font-weight: 900;
  }
  .ko {
    color: white;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
    .en {
      font-size: 66px;
    }
  }
`;
const Desc = styled.h6`
  font-size: 40px;
  font-weight: 300;
  line-height: 50px;
  color: white;
  opacity: 0.7;
  margin: 20px 0;
  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 34px;
    margin: 50px 0;
  }
`;

const Button = styled.button`
  all: unset;
  color: white;
  font-size: 30px;
  font-weight: 500;
  svg {
    color: ${mainStyle.mainColor};
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export const MainBanner = () => {
  return (
    <Wrap>
      <Img
        style={{
          background: `url(${mainbanner_img}) no-repeat center/cover`,
        }}
      >
        <Container>
          <SubWrap>
            <SubDesc>What's New</SubDesc>
            <SubTitle>현재 진행중인 이벤트</SubTitle>
          </SubWrap>

          <ConWrap>
            <ReviewImg
              style={{
                background: `url(${review}) no-repeat center/cover`,
              }}
            />
            <TextWrap>
              <Title>
                <span className="en">Event</span>
                <span className="ko">리뷰이벤트</span>
              </Title>
              <Desc>
                지금 다이슨 리뷰 이벤트 참여하면
                <br /> 참여자 전원 액세서리 바우처 증정
              </Desc>
              <Button>
                더보기
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
            </TextWrap>
          </ConWrap>
        </Container>
      </Img>
      <MobImg
        style={{
          background: `url(${mob_banner}) no-repeat center/cover`,
        }}
      >
        <Container>
          <SubWrap>
            <SubDesc>What's New</SubDesc>
            <SubTitle>현재 진행중인 이벤트</SubTitle>
          </SubWrap>

          <ConWrap>
            <TextWrap>
              <Title>
                <span className="en">Event</span>
                <span className="ko">리뷰이벤트</span>
              </Title>
              <Desc>
                지금 다이슨 리뷰 이벤트 참여하면
                <br /> 참여자 전원 액세서리 바우처 증정
              </Desc>
              <Button>
                더보기
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
            </TextWrap>
            <ReviewImg
              style={{
                background: `url(${review}) no-repeat center/cover`,
              }}
            />
          </ConWrap>
        </Container>
      </MobImg>
    </Wrap>
  );
};
