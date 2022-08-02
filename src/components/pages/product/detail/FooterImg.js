import styled from "styled-components";
import footerimg from "./Image/footerimg.png";

const Wrap = styled.div`
  width: 100%;
  margin-top: 96px;
`;
const Img = styled.div`
  width: 100%;
  height: 605px;
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
