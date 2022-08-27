import styled from "styled-components";
import { PageTitle } from "../../../PageTitle";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { FooterImg } from "./FooterImg";
import { ScrlTop } from "../../../ScrlTop";

const Wrap = styled.div`
  width: 100%;
`;

export const Product = () => {
  return (
    <>
      <PageTitle title={"Products"} />
      <ScrlTop />
      <Wrap>
        <PageTitle title="Product" />
        <Section1 />
        <Section2 />
        <Section3 />
        <FooterImg />
      </Wrap>
    </>
  );
};
