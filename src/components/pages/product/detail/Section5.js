import styled from "styled-components";
import review from "./Image/review.png";

const Wrap = styled.div`
  width: 100%;
  margin-top: 96px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Img = styled.div`
  width: 100%;
  height: 950px;
`;

export const Section5 = () => {
  return (
    <Wrap>
      <Img
        style={{
          background: `url(${review}) no-repeat center / cover`,
        }}
      />
    </Wrap>
  );
};
