import styled from "styled-components";

const Section3Wrap = styled.div`
  margin-top: 130px;
`;

const Section3Banner = styled.div`
  position: relative;
`;
const Section3Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 45%;
  font-size: 50px;
  font-weight: 500;
  color: white;
`;

export const Section3 = () => {
  return (
    <Section3Wrap>
      <Section3Banner>
        <img
          src={require("./Image/section.png")}
          width="100%"
          alt="dyson service center"
        ></img>
        <Section3Title>제품상담</Section3Title>
      </Section3Banner>
    </Section3Wrap>
  );
};
