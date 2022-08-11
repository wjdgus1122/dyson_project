import styled from "styled-components";
import footerimg from "./Image/footerimg.jpg";

const Wrap = styled.div`
  width: 100%;
  margin-top: 96px;
`;
const FooterImg = styled.div`
  width: 100%;
  height: 605px;
`;

export const Section4 = () => {
  return (
    <Wrap>
      <FooterImg
        style={{
          background: `url(${footerimg}) no-repeat center / cover`,
        }}
      />
    </Wrap>
  );
};
