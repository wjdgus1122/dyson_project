import { useRef, useState } from "react";
import styled from "styled-components";
import mainbanner from "./Image/mainbanner.png";

export const Section11 = () => {
  const [hair, setHair] = useState(0);

  const hairRef = useRef(null);
  const vacuumRef = useRef(null);

  const onMouse = () => {
    setHair(1);
  };

  const onMouseOut = () => {
    setHair(0);
  };

  // const onMouse = () => {
  //   // if (menuWrapRef.current === null || menuRef.current === null) {
  //   //   return;
  //   // }
  //   // if ((menuWrapRef.current.style.display = "none")) {
  //   //   menuWrapRef.current.style.display = "block";
  //   // }
  //   hairRef.current.style.display = "block";
  //   vacuumRef.current.style.display = "block";
  // };

  // const onMouseOut = () => {
  //   // if ((hairRef.current.style.display = "block")) {
  //   //   hairRef.current.style.display = "none";
  //   // }
  //   hairRef.current.style.display = "none";
  //   vacuumRef.current.style.display = "none";
  // };

  return (
    <Wrap>
      <Img
        style={{
          background: `url(${mainbanner}) no-repeat center/cover`,
        }}
      ></Img>
      <Box>
        <TextCon>
          <Title>스타일링 간편하게</Title>
          <Menu>
            <TextWrap onMouseOver={onMouse} onMouseOut={onMouseOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="333"
                height="118"
                viewBox="0 0 333 118"
                hair={hair}
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
              <Category
                // ref={hairRef}
                style={{
                  color: "#ff5555",
                  display: `${hair === 1 ? "flex" : "none"}`,
                }}
              >
                <div className="hair_menu">
                  <p>멀티 스타일러</p>
                  <p>헤어 스트레이트너</p>
                  <p>헤어 드라이어</p>
                </div>
              </Category>
            </TextWrap>
            <TextWrap>
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
                  <tspan
                    // onMouseOver={onMouse}
                    // onMouseOut={onMouseOut}
                    className="title"
                    x="-612.7"
                    y="0"
                  >
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
            </TextWrap>
            <TextWrap>공기</TextWrap>
            <TextWrap>조명</TextWrap>
            <TextWrap>기타</TextWrap>
          </Menu>
        </TextCon>
      </Box>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
`;

const Img = styled.div`
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  position: absolute;
  right: 120px;
  top: 60px;
`;

const TextCon = styled.div``;

const Title = styled.div``;

const Menu = styled.div``;

const TextWrap = styled.div`
  svg {
    cursor: pointer;
    fill-opacity: 0;
    &:hover {
      fill-opacity: 1;
    }
    /* &:hover {
      fill-opacity: ${(props) => props.hair};
    } */

    /* &:hover {
      fill-opacity: 1;
    } */
    /* &:hover + .hair {
      display: block;
    } */
  }
`;

const Category = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: end;
  display: none;
  /* display: ${(props) => props.show}; */
  p {
    margin-bottom: 10px;
  }
  /* .hair:hover + .hair_menu {
    display: block;
  } */
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
