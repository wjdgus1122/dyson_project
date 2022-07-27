import styled from "styled-components";

const Section2Wrap = styled.div`
  margin-top: 130px;
`;

const Section2Banner = styled.div`
  position: relative;
`;
const Section2Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 42%;
  font-size: 50px;
  font-weight: 500;
  color: white;
`;

export const Section2 = () => {
  return (
    <Section2Wrap>
      <Section2Banner>
        <img src={require("./Image/section.png")} width="100%"></img>
        <Section2Title>수리서비스</Section2Title>
      </Section2Banner>
    </Section2Wrap>
  );
};
