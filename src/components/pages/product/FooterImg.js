import styled from "styled-components";
import footerimg from "./Image/footerimg.jpg";

const Img = styled.div`
  width: 100%;
  height: 605px;
  margin-top: 150px;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

export const FooterImg = () => {
  return (
    <>
      <Img
        style={{
          background: `url(${footerimg}) no-repeat center / cover`,
        }}
      />
    </>
  );
};
