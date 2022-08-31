import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import { mainStyle } from "../../../../styles/Globalstyle";
import { Container } from "../../../Container";
import { VacuumsVseries } from "../../../../TextDB";

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin: 60px 0;
  @media screen and (max-width: 500px) {
    font-size: 30px;
    text-align: left;
  }
`;

const Wrap = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 50px;
    color: ${mainStyle.mainColor};
    opacity: 0.5;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const CWrap = styled.div`
  width: 100%;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ConWrap = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  h1 {
    margin: 20px 0;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 14px;
    }
  }
`;

const Con = styled.div`
  height: 400px;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .new::before {
    content: "New";
    position: absolute;
    font-size: 20px;
    transform: translateY(-20px);
    color: red;
    @media screen and (max-width: 500px) {
      font-size: 10px;
      transform: translateY(-10px);
    }
  } */
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;

const Img = styled.div`
  width: 80%;
  height: 300px;
  background-color: gray;
  @media screen and (max-width: 500px) {
    width: 95px;
    height: 150px;
  }
`;

const Name = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    height: 50px;
    font-size: 16px;
    margin-top: 15px;
  }
`;

export const Section6 = () => {
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>이런 제품도 있어요!</Title>
      <Wrap>
        <Swiper
          modules={[Navigation]}
          navigation
          {...params}
          // spaceBetween={20}
          // slidesPerView={3}
        >
          {VacuumsVseries && (
            <CWrap>
              {VacuumsVseries.map((a) => (
                <SwiperSlide>
                  <ConWrap key={a.id}>
                    <Con
                      style={{
                        background: `url(${a.imgUrl}) no-repeat center/cover`,
                      }}
                    ></Con>
                    <h1>{a.title}</h1>
                  </ConWrap>
                </SwiperSlide>
              ))}
            </CWrap>
          )}
        </Swiper>
      </Wrap>
    </Container>
  );
};
