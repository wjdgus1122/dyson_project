import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import mainbanner_img from "./img/mainbanner_img.png";
import review from "./img/review.png";
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
`;

const SubWrap = styled.div`
  padding-top: 120px;
  text-align: center;
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
`;

const ReviewImg = styled.div`
  width: 649px;
  height: 397px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 55px;
  font-weight: 900;
  margin-bottom: 20px;
  .en {
    color: ${mainStyle.mainColor};
    margin-right: 10px;
  }
  .ko {
    color: white;
  }
`;
const Desc = styled.h6`
  font-size: 40px;
  font-weight: 300;
  line-height: 50px;
  color: white;
  opacity: 0.7;
  margin-bottom: 20px;
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
    </Wrap>
  );
};
