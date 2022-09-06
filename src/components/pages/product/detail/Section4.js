import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ScrlTop } from "../../../../ScrlTop";
import { mainStyle } from "../../../../styles/Globalstyle";
import { Container } from "../../../Container";
import { Logo } from "./Image/Logo";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 900;
  width: 35%;
  margin-left: 120px;
  svg {
    margin: 20px;
  }
  span {
    font-size: 30px;
    font-weight: 100;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0;
    margin-bottom: 30px;
    width: 80%;
    font-size: 25px;
    svg {
      margin: 5px;
    }
    span {
      font-size: 16px;
    }
  }
`;

const ConWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  .new::before {
    font-size: 20px;
    position: absolute;
    content: "New";
    color: red;
    transform: translateY(-20px);
    @media screen and (max-width: 500px) {
      font-size: 8px;
      transform: translateY(-10px);
    }
  }
  &:first-child {
    transform: translateY(90px);
    align-items: flex-end;
    opacity: 0.5;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

const Img = styled.div`
  width: 95%;
  height: 350px;
  background-color: gray;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100px;
  }
`;

const Name = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 5px;
  @media screen and (max-width: 500px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
  }
`;

const Desc = styled.h4`
  font-size: 22px;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    height: 25px;
    font-size: 10px;
  }
`;

const Btn = styled.div`
  font-size: 18px;
  margin: 20px 0;
  cursor: pointer;
  svg {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const Line = styled.div`
  width: 90%;
  height: 20px;
  border-top: 1px solid ${mainStyle.mainColor};
`;

const Spec = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
  line-height: 20px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Section4 = () => {
  return (
    <Container>
      <Title>
        <Logo /> vs <Logo />
        <span>스펙비교</span>
      </Title>
      <ConWrap>
        <Con>
          <Img style={{ opacity: 0 }} />
          <Name></Name>
          <Desc></Desc>
          <Btn></Btn>
          <Spec>흡입력</Spec>
          <Spec>사용시간</Spec>
          <Spec>무게</Spec>
          <Spec>먼지통 크기</Spec>
          <Spec>주요 기능</Spec>
        </Con>

        <Con>
          <Img />
          <Name className="new">v15 detect</Name>
          <Desc>가장 강력한 흡입력</Desc>
          <Btn>
            <Link to="/product/detail">
              더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </Btn>
          <Line />
          <Spec>240 AW</Spec>
          <Spec>60 분</Spec>
          <Spec>3 kg</Spec>
          <Spec>L</Spec>
          <Spec>
            레이저
            <br />
            사용시간알림
            <br />
            유지보수알림
            <br />
            엉킴방지기술
          </Spec>
        </Con>
        <Con>
          <Img />
          <Name className="new">v12 detect slim</Name>
          <Desc>흡입력과 가벼움을 동시에</Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
          <Line />
          <Spec>150 AW</Spec>
          <Spec>60 분</Spec>
          <Spec>2.2 kg</Spec>
          <Spec>M</Spec>
          <Spec>
            레이저
            <br />
            사용시간알림
            <br />
            유지보수알림
            <br />
            엉킴방지기술
            <br />
            원버튼 전원제어
          </Spec>
        </Con>
        <Con>
          <Img />
          <Name>v11</Name>
          <Desc>집안 구석구석 깊숙하게</Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
          <Line />
          <Spec>185 AW</Spec>
          <Spec>60 분</Spec>
          <Spec>3 kg</Spec>
          <Spec>L</Spec>
          <Spec>
            사용시간알림
            <br />
            유지보수알림
            <br />
            엉킴방지기술
          </Spec>
        </Con>
        <Con>
          <Img />
          <Name>cyclone v10</Name>
          <Desc>집안 구석구석 섬세하게</Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
          <Line />
          <Spec>150 AW</Spec>
          <Spec>60 분</Spec>
          <Spec>2.6 kg</Spec>
          <Spec>L</Spec>
          <Spec>3가지 툴 제공</Spec>
        </Con>
      </ConWrap>
    </Container>
  );
};
