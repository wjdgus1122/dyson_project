import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import banner1 from "./Image/banner1.png";

const Wrap = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 90vh;
  background: url(${banner1}) no-repeat left / contain;
`;

const Half = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  background: linear-gradient(70deg, transparent 50%, #333 0);
  padding: 50px;
  box-sizing: border-box;
`;

const SvgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
  svg {
    cursor: pointer;
    fill-opacity: 0;
    &:hover {
      fill-opacity: 1;
      /* div {
        display: block;
      } */
    }
    /* &:hover div {
      display: block;
    } */
  }
`;

const Desc = styled.h4`
  position: absolute;
  top: 25px;
  left: 47%;
  font-size: 40px;
  font-weight: 600;
  color: #ff5555;
`;

const Category = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: end;
  /* display: none; */
  p {
    margin-bottom: 10px;
  }
`;

export const Section1 = () => {
  return (
    <Wrap>
      <Half>
        <SvgWrap>
          <Desc>
            스타일 타협 없이, <br />
            정교한 스타일링
          </Desc>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="333"
            height="118"
            viewBox="0 0 333 118"
          >
            <text
              id="hair_care"
              data-name="hair care"
              transform="translate(331 92)"
              fill="#f55"
              stroke="#f55"
              stroke-width="2"
              font-size="100"
              font-family="HoratioD-Medi, Horatio D"
              letter-spacing="-0.002em"
            >
              <tspan x="-328.3" y="0">
                hair care
              </tspan>
            </text>
          </svg>
          <Category style={{ color: "#ff5555" }}>
            <p>멀티 스타일러</p>
            <p>헤어 스트레이트너</p>
            <p>헤어 드라이어</p>
          </Category>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="617"
            height="118"
            viewBox="0 0 617 118"
          >
            <text
              id="vacuum_cleaners"
              data-name="vacuum cleaners"
              transform="translate(615 92)"
              fill="#40b109"
              stroke="#40b109"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              font-size="100"
              font-family="HoratioD-Medi, Horatio D"
              letter-spacing="-0.002em"
            >
              <tspan x="-612.7" y="0">
                vacuum cleaners
              </tspan>
            </text>
          </svg>
          <Category style={{ color: "#40b109" }}>
            <p>v15 | v12 | v11 | v10</p>
            <p>옴니-글라이드™</p>
            <p>마이크로 1.5kg™</p>
            <p>디지털 슬림™</p>
            <p>아웃사이즈™</p>
          </Category>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="493"
            height="118"
            viewBox="0 0 493 118"
          >
            <text
              id="air_treatment"
              data-name="air treatment"
              transform="translate(491 92)"
              fill="#0087f5"
              stroke="#0087f5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              font-size="100"
              font-family="HoratioD-Medi, Horatio D"
              letter-spacing="-0.002em"
            >
              <tspan x="-488.2" y="0">
                air treatment
              </tspan>
            </text>
          </svg>
          <Category style={{ color: "#0087f5" }}>
            <p>공기청정기</p>
            <p>가습기</p>
          </Category>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="290"
            height="119"
            viewBox="0 0 290 119"
          >
            <text
              id="lighting"
              transform="translate(288 92)"
              fill="#fca000"
              stroke="#fca000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              font-size="100"
              font-family="HoratioD-Medi, Horatio D"
              letter-spacing="-0.002em"
            >
              <tspan x="-285.7" y="0">
                lighting
              </tspan>
            </text>
          </svg>
          <Category style={{ color: "#fca000" }}>
            <p>데스크형</p>
            <p>플로어스탠드형</p>
          </Category>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="425"
            height="118"
            viewBox="0 0 425 118"
          >
            <text
              id="accessories"
              transform="translate(423 92)"
              fill="#ccc"
              stroke="#ccc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              font-size="100"
              font-family="HoratioD-Medi, Horatio D"
              letter-spacing="-0.002em"
            >
              <tspan x="-420.2" y="0">
                accessories
              </tspan>
            </text>
          </svg>
          <Category style={{ color: "#ccc" }}>
            <p>헤어케어</p>
            <p>무선청소기</p>
            <p>공기청정기</p>
          </Category>
        </SvgWrap>
      </Half>
    </Wrap>
  );
};
