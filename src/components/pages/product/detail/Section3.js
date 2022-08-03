import styled from "styled-components";
import detail from "./Image/detail.jpg";

const Wrap = styled.div`
  width: 100%;
`;

export const Section3 = () => {
  return (
    <Wrap>
      <img alt="상세정보" src={detail} />
    </Wrap>
  );
};
