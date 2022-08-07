import styled from "styled-components";
import footerimg from "./Image/footerimg.jpg";

const Wrap = styled.div`
  width: 100%;
  margin-top: 96px;
`;
const Img = styled.div`
  width: 100%;
  height: 605px;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

export const FooterImg = () => {
  return (
    <Wrap>
      <Img
        style={{
          background: `url(${footerimg}) no-repeat center / cover`,
        }}
      />
    </Wrap>
  );
};
