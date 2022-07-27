import styled from "styled-components";

const Section1Wrap = styled.div`
  margin-top: 130px;
`;

const Section1Banner = styled.div`
  position: relative;
`;
const Section1Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 42%;
  font-size: 50px;
  font-weight: 500;
  color: white;
`;

export const Section1 = () => {
  return (
    <Section1Wrap>
      <Section1Banner>
        <img src={require("./Image/section.png")} width="100%"></img>
        <Section1Title>다이슨 서비스센터</Section1Title>
      </Section1Banner>
    </Section1Wrap>
  );
};
