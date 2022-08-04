import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../../../styles/Globalstyle";
import { Container } from "../../../Container";

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin: 60px 0;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 50px;
    color: ${mainStyle.mainColor};
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .new::before {
    content: "New";
    position: absolute;
    font-size: 20px;
    transform: translateY(-20px);
    color: red;
  }
`;

const Img = styled.div`
  width: 80%;
  height: 300px;
  background-color: gray;
`;

const Name = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-top: 30px;
`;

export const Section6 = () => {
  return (
    <Container>
      <Title>이런 제품도 있어요!</Title>
      <Wrap>
        <FontAwesomeIcon icon={faAngleLeft} />
        <Con>
          <Img>
            <div />
          </Img>
          <Name className="new">v15 detect</Name>
        </Con>
        <Con>
          <Img>
            <div />
          </Img>
          <Name>v12 detect slim</Name>
        </Con>
        <Con>
          <Img>
            <div />
          </Img>
          <Name>v11</Name>
        </Con>
        <Con>
          <Img>
            <div />
          </Img>
          <Name>cyclone v10</Name>
        </Con>
        <Con>
          <Img>
            <div />
          </Img>
          <Name>v15 detect</Name>
        </Con>
        <FontAwesomeIcon icon={faAngleRight} />
      </Wrap>
    </Container>
  );
};
