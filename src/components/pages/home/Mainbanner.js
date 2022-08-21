import styled from "styled-components";
import { Container } from "../../Container";
import main_1 from "./img/main_1.jpg";
import main_2 from "./img/main2.jpg";
import main_3 from "./img/main3.png";
import mob_main1 from "./img/mob_main1.png";
import mob_main2 from "./img/mob_main2.png";
import mob_main3 from "./img/mob_main3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { mainStyle } from "../../../styles/Globalstyle";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const TextWrap = styled.div`
  width: 435px;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 230px;
  }
`;
const MobTextWrap = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    width: 230px;
    position: absolute;
    right: 20px;
  }
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 100;
  color: white;
  line-height: 60px;
  padding-top: 220px;
  @media screen and (max-width: 500px) {
    font-size: 22px;
    line-height: 35px;
    padding-top: 80px;
  }
`;
const MobTitle = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    text-align: right;
    font-size: 22px;
    line-height: 35px;
    padding-top: 80px;
    font-weight: 100;
    color: white;
  }
`;
const ProductView = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: white;
  position: absolute;
  left: 5px;
  margin-top: 40px;
`;

const MobProductView = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: white;
    position: absolute;
    right: 5px;
    margin-top: 40px;
  }
`;
const BottomWrap = styled.div`
  position: absolute;
  right: 130px;
  bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  &:first-child {
    margin-bottom: 20px;
  }
  svg {
    color: ${mainStyle.mainColor};
  }
  &.text {
    color: ${mainStyle.fontColor};
  }
  &.arrow {
    svg {
      color: white;
    }
  }
`;

export const Mainbanner = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <SwiperSlide>
          <Wrap style={{ background: `url(${main_1}) no-repeat right/cover` }}>
            <Container>
              <TextWrap>
                <Title>
                  과도한 열 손상이 없는 자연스러운 스타일링, 그리고 잔머리
                  정리까지
                </Title>
                <Link to={"/product"}>
                  <ProductView>
                    제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
                  </ProductView>
                </Link>
              </TextWrap>
              <BottomWrap>
                <Text>
                  코안다 기술이란? <FontAwesomeIcon icon={faCaretRight} />
                </Text>
                <Text>
                  추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
                </Text>
              </BottomWrap>
            </Container>
          </Wrap>

          <MobWrap
            style={{
              background: `url(${mob_main1}) no-repeat center/cover`,
            }}
          >
            <Container>
              <TextWrap>
                <Title>
                  과도한 열 손상이 없는 자연스러운 스타일링, 그리고 잔머리
                  정리까지
                </Title>
                <Link to={"/product"}>
                  <ProductView>
                    제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
                  </ProductView>
                </Link>
              </TextWrap>
              <BottomWrap>
                <Text>
                  코안다 기술이란? <FontAwesomeIcon icon={faCaretRight} />
                </Text>
                <Text>
                  추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
                </Text>
              </BottomWrap>
            </Container>
          </MobWrap>
        </SwiperSlide>
        <SwiperSlide>
          <Wrap
            style={{ background: `url(${main_2})  no-repeat right -2px/cover` }}
          >
            <Container>
              <TextWrap>
                <Title>
                  다이슨의 가장 강력하고 <br /> 인텔리전트한 <br /> 무선청소기.
                </Title>
                <Link to={"/product"}>
                  <ProductView>
                    제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
                  </ProductView>
                </Link>
              </TextWrap>
              <BottomWrap>
                <Text className="text">
                  레이저 디텍트 기술이란?{" "}
                  <FontAwesomeIcon icon={faCaretRight} />
                </Text>
                <Text className="text">
                  추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
                </Text>
              </BottomWrap>
            </Container>
          </Wrap>

          <MobWrap
            style={{
              background: `url(${mob_main2})  no-repeat right -2px/cover`,
            }}
          >
            <Container>
              <MobTextWrap>
                <MobTitle>
                  다이슨의 가장 강력하고 <br /> 인텔리전트한 <br /> 무선청소기.
                </MobTitle>
                <Link to={"/product"}>
                  <MobProductView>
                    제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
                  </MobProductView>
                </Link>
              </MobTextWrap>
              <BottomWrap>
                <Text className="text">
                  레이저 디텍트 기술이란?{" "}
                  <FontAwesomeIcon icon={faCaretRight} />
                </Text>
                <Text className="text">
                  추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
                </Text>
              </BottomWrap>
            </Container>
          </MobWrap>
        </SwiperSlide>
        <SwiperSlide>
          <Wrap
            style={{ background: `url(${main_3})  no-repeat center/cover` }}
          >
            <Container>
              <TextWrap>
                <Title>
                  날개 없는 선풍기의 <br /> 강력한 바람
                </Title>
                <Link to={"/product"}>
                  <ProductView>
                    제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
                  </ProductView>
                </Link>
              </TextWrap>
              <BottomWrap>
                <Text className="text arrow">
                  에어 멀티플라이어 기술이란?{" "}
                  <FontAwesomeIcon icon={faCaretRight} />
                </Text>
                <Text className="text arrow">
                  추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
                </Text>
              </BottomWrap>
            </Container>
          </Wrap>

          <MobWrap
            style={{ background: `url(${mob_main3})  no-repeat center/cover` }}
          >
            <Container>
              <TextWrap>
                <Title>
                  날개 없는 선풍기의 <br /> 강력한 바람
                </Title>
                <Link to={"/product"}>
                  <ProductView>
                    제품보러가기 <FontAwesomeIcon icon={faCaretRight} />{" "}
                  </ProductView>
                </Link>
              </TextWrap>
              <BottomWrap>
                <Text className="text arrow">
                  에어 멀티플라이어 기술이란?{" "}
                  <FontAwesomeIcon icon={faCaretRight} />
                </Text>
                <Text className="text arrow">
                  추가 악세사리 구입 <FontAwesomeIcon icon={faCaretRight} />
                </Text>
              </BottomWrap>
            </Container>
          </MobWrap>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
