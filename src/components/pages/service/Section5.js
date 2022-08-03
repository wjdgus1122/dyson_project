import styled from "styled-components";
import footerimg from "./Image/footer.png";
import mobileimg from "../../Image/responsive_footer.png";

const Section5Wrap = styled.div`
  width: 100%;
  margin-top: 96px;
`;
const FootImg = styled.div`
  width: 100%;
  height: 605px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileImg = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    height: 607px;
  }
`;

export const Section5 = () => {
  return (
    <Section5Wrap>
      <FootImg
        style={{
          background: `url(${footerimg}) no-repeat center / cover`,
        }}
      />
      <MobileImg
        style={{
          background: `url(${mobileimg}) no-repeat center / cover`,
        }}
      />
    </Section5Wrap>
  );
};
