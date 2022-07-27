import styled from "styled-components";

const Section4Wrap = styled.div`
  margin-top: 130px;
`;

const Section4Banner = styled.div`
  position: relative;
`;
const Section4Title = styled.h1`
  position: absolute;
  top: 50px;
  left: 42%;
  font-size: 50px;
  font-weight: 500;
  color: white;
`;

export const Section4 = () => {
  return (
    <Section4Wrap>
      <Section4Banner>
        <img
          src={require("./Image/section.png")}
          width="100%"
          alt="dyson service center"
        ></img>
        <Section4Title>고객센터 연락처</Section4Title>
      </Section4Banner>
    </Section4Wrap>
  );
};
