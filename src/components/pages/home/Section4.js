import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import con_acce from "./img/section4_acce.png";
import con_air from "./img/section4_air.png";
import con_hair from "./img/section4_hair.png";
import con_light from "./img/section4_light.png";
import con_va from "./img/section4_va.png";

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 200px;
`;
const TitleWrap = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
const Title = styled.div`
  font-size: 100px;
  font-weight: 900;
  font-family: ${mainStyle.fontType};
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;
const STitle = styled.div`
  font-size: 55px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 13px;
    margin-left: 10px;
  }
`;
const ProductWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    height: auto;
    display: block;
    & .last {
      img {
        width: 30%;
        height: 100%;
        transform: translateX(10%);
      }
      .pdtext {
        position: absolute;
        top: 25px;
        left: 145px;
        text-align: start;
        color: #307800;
      }
    }
  }
`;
const LeftCon = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .con:first-child .pdtext {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: #ff5555;
    text-align: end;
  }
  & .con:nth-child(3) .pdtext {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: #424242;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    display: block;
    & .con:nth-child(2) .pdtext {
      position: absolute;
      top: 25px;
      left: 145px;
      color: #ff5555;
      text-align: start;
    }
    & .con:nth-child(4) {
      img {
        transform: translateX(-33%);
      }
      .pdtext {
        position: absolute;
        top: 25px;
        left: 145px;
        text-align: start;
        color: #424242;
      }
    }
  }
`;
const Con = styled.div`
  width: 100%;
  height: 48%;
  background: linear-gradient(#e6e6e6, #fff);
  overflow: hidden;
  position: relative;
  &:hover .box {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const ProcutImg = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 500px) {
    width: 50%;
    height: 100%;
  }
`;
const TextWrap = styled.div`
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  span {
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -2px;
    font-family: ${mainStyle.fontType};
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    span {
      font-size: 35px;
      line-height: 40px;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(${mainStyle.mainRgbColor}, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
const ViewBtn = styled.div`
  width: 225px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  border: 1px solid white;
  span {
    margin-left: 10px;
  }
`;
const CenterCon = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .con:nth-child(1) .pdtext {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #0087f5;
    text-align: end;
  }
  & .con:nth-child(3) .pdtext {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #fca000;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    display: block;
    & .con:nth-child(2) {
      img {
        width: 40%;
        height: 100%;
      }
      .pdtext {
        position: absolute;
        top: 25px;
        left: 145px;
        text-align: start;
        color: #fca000;
      }
    }
    & .con:nth-child(4) .pdtext {
      position: absolute;
      top: 25px;
      left: 145px;
      text-align: start;
      color: #0087f5;
    }
  }
`;
const RightCon = styled.div`
  width: 32%;
  height: 100%;
  background: linear-gradient(#e6e6e6, #fff);
  position: relative;
  &:hover .box {
    display: flex;
  }
  & .pdtext {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #307800;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const MoCon = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    height: 110px;
    background: linear-gradient(#e6e6e6, #fff);
    margin-bottom: 10px;
    position: relative;
  }
`;

export const Section4 = () => {
  return (
    <Wrap>
      <Container>
        <TitleWrap>
          <Title>Product</Title>
          <STitle>제품</STitle>
        </TitleWrap>
        <ProductWrap>
          <LeftCon>
            <Con className="con">
              <ProcutImg src={`${con_hair}`} />
              <TextWrap className="pdtext">
                <span>hair care</span> <br />
                다이슨 헤어케어
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
            <MoCon className="con">
              <ProcutImg src={`${con_hair}`} />
              <TextWrap className="pdtext">
                <span>hair care</span> <br />
                다이슨 헤어케어
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </MoCon>
            <Con className="con">
              <ProcutImg src={`${con_acce}`} />
              <TextWrap className="pdtext">
                <span>accessories</span> <br />
                악세사리 및 부품
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
            <MoCon className="con">
              <ProcutImg src={`${con_acce}`} />
              <TextWrap className="pdtext">
                <span>accessories</span> <br />
                악세사리 및 부품
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </MoCon>
          </LeftCon>
          <CenterCon>
            <Con className="con">
              <ProcutImg src={`${con_air}`} />
              <TextWrap className="pdtext">
                <span>air purifiers</span> <br />
                다이슨 공기청정기
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
            <MoCon className="con">
              <ProcutImg src={`${con_light}`} />
              <TextWrap className="pdtext">
                <span>lighting</span> <br />
                다이슨 조명
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </MoCon>
            <Con className="con">
              <ProcutImg src={`${con_light}`} />
              <TextWrap className="pdtext">
                <span>lighting</span> <br />
                다이슨 조명
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </Con>
            <MoCon className="con">
              <ProcutImg src={`${con_air}`} />
              <TextWrap className="pdtext">
                <span>air purifiers</span> <br />
                다이슨 공기청정기
              </TextWrap>
              <Box className="box">
                <Link to={"/product"}>
                  <ViewBtn>
                    제품보러가기{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </ViewBtn>
                </Link>
              </Box>
            </MoCon>
          </CenterCon>
          <RightCon>
            <ProcutImg src={`${con_va}`} />
            <TextWrap className="pdtext">
              <span>vacuums</span> <br />
              다이슨 무선청소기
            </TextWrap>
            <Box className="box">
              <Link to={"/product"}>
                <ViewBtn>
                  제품보러가기{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </ViewBtn>
              </Link>
            </Box>
          </RightCon>
          <MoCon className="last">
            <ProcutImg src={`${con_va}`} />
            <TextWrap className="pdtext">
              <span>vacuums</span> <br />
              다이슨 무선청소기
            </TextWrap>
            <Box className="box">
              <Link to={"/product"}>
                <ViewBtn>
                  제품보러가기{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </ViewBtn>
              </Link>
            </Box>
          </MoCon>
        </ProductWrap>
      </Container>
    </Wrap>
  );
};
