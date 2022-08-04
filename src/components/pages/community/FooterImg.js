import styled from "styled-components";
import footer_img from "./img/footer_img.png";

const Web = styled.div`
  width: 100%;
  height: 65vh;
`;

export const FooterImg = () => {
  return (
    <>
      <Web
        style={{
          background: `url(${footer_img}) no-repeat center/cover`,
        }}
      ></Web>
    </>
  );
};
