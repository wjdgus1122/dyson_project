import styled from "styled-components";
import footerimg from "./Image/footer.png";

const Section5Wrap = styled.div`
  width: 100%;
  margin-top: 96px;
`;
const FootImg = styled.div`
  width: 100%;
  height: 605px;
`;

export const Section5 = () => {
  return (
    <Section5Wrap>
      <FootImg
        style={{
          background: `url(${footerimg}) no-repeat center / cover`,
        }}
      />
    </Section5Wrap>
  );
};
