import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Container } from "../../../Container";
import { Logo } from "./Image/Logo";

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  width: 35%;
  svg {
    margin: 20px;
  }
  span {
    font-size: 30px;
    font-weight: 100;
  }
`;

const ConWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

const Img = styled.div`
  width: 95%;
  height: 350px;
  background-color: gray;
`;

const Name = styled.div``;

const Desc = styled.div``;

const Btn = styled.div``;

const Spec = styled.div``;

export const Section4 = () => {
  return (
    <Container>
      <Title>
        <Logo /> vs <Logo />
        <span>스펙비교</span>
      </Title>
      <ConWrap>
        <Con>
          <Img />
          <Name></Name>
          <Desc></Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
          <Spec>흡입력</Spec>
          <Spec>사용시간</Spec>
          <Spec>무게</Spec>
          <Spec>먼지통 크기</Spec>
          <Spec>주요 기능</Spec>
        </Con>

        <Con>
          <Img />
          <Name>v15 detect</Name>
          <Desc>가장 강력한 흡입력</Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
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
          <Name></Name>
          <Desc></Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
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
          <Name></Name>
          <Desc></Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
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
          <Name></Name>
          <Desc></Desc>
          <Btn>
            더 알아보기 <FontAwesomeIcon icon={faAngleRight} />
          </Btn>
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
