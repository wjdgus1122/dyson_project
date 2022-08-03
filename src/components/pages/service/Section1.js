import { useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import bannerimg from "./Image/section1.png";
import responcenter from "./Image/responcenter.png";

const Section1Wrap = styled.div`
  margin-top: 130px;
  @media screen and (max-width: 500px) {
    margin-top: 65px;
    width: 100%;
  }
`;

const Section1Banner = styled.div`
  width: 100%;
  height: 400px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileBanner = styled.div`
  width: 100%;
  height: 78px;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const MapWrap = styled.div`
  margin-top: 60px;
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
  }
`;
const MapTabMenu = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
const Box = styled.div`
  width: 49%;
  height: 200px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-left: 30px;
    span {
      color: ${mainStyle.mainColor};
    }
  }
  p {
    font-size: 21px;
    font-weight: 100;
    padding-left: 30px;
  }
  @media screen and (max-width: 500px) {
    :nth-child(1) {
      margin-bottom: 32px;
    }
    width: 100%;
    height: 214px;
    text-align: center;

    h3 {
      font-size: 18px;
      font-weight: 700;
      padding-left: 0;
    }
    p {
      font-size: 14px;
      line-height: 25px;
      font-weight: 100;
      padding-left: 0;
      span {
        font-weight: 700;
      }
    }
  }
`;

const Map = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 766px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Section1 = () => {
  const [map, setMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.825664695715!2d127.09689921558734!3d37.51202973500503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a0b52f9a25%3A0x1ed07bf74dcfe84!2z64uk7J207IqoIO2UhOumrOuvuOyXhCDshJzruYTsiqTshLzthLA!5e0!3m2!1sko!2skr!4v1658975745575!5m2!1sko!2skr"
  );

  const mapclick1 = () => {
    setMap(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.825664695715!2d127.09689921558734!3d37.51202973500503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a0b52f9a25%3A0x1ed07bf74dcfe84!2z64uk7J207IqoIO2UhOumrOuvuOyXhCDshJzruYTsiqTshLzthLA!5e0!3m2!1sko!2skr!4v1658975745575!5m2!1sko!2skr"
    );
  };

  const mapclick2 = () => {
    setMap(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202857.2504405755!2d126.77830456647811!3d37.398237785812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b1585ccc3a7%3A0xf1e9a66dce33b956!2z64uk7J207IqoIOqzteyLnSDshJzruYTsiqQg7YyM7Yq464SIIOq0keq1kOyEvO2EsA!5e0!3m2!1sko!2skr!4v1658979694579!5m2!1sko!2sk"
    );
  };

  return (
    <>
      <Container />
      <Section1Wrap>
        <Section1Banner
          style={{
            background: `url(${bannerimg}) no-repeat center / cover`,
          }}
        ></Section1Banner>
        <MobileBanner
          style={{
            background: `url(${responcenter}) no-repeat center / cover`,
          }}
        />
        <MapWrap>
          <MapTabMenu>
            <Box onClick={mapclick1}>
              <h3>
                <span>프리미엄</span> 서비스 센터
              </h3>
              <p>
                <span>롯데월드 하이마트 메가스토어 잠실점</span> <br />
                무선 청소기 수리 시 10만원 상당의 프리미엄 청소 서비스 무료 제공
                (내/외부 물청소 포함)
              </p>
            </Box>
            <Box onClick={mapclick2}>
              <h3>
                <span>전문</span> 서비스 센터
              </h3>
              <p>
                7개의 다이슨 전문 서비스 센터에서 고객님을 위해 대기하고
                있습니다.
                <br />
                무선 청소기 수리 시 무료 청소 서비스가 제공됩니다. (에어건을
                이용한 먼지 제거)
              </p>
            </Box>
          </MapTabMenu>
          <Map>
            <Iframe
              src={map}
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </Map>
        </MapWrap>
      </Section1Wrap>
    </>
  );
};
