import styled from "styled-components";
import { PageTitle } from "../../../PageTitle";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";


const Wrap = styled.div`
  width: 100%;
`;

export const Product = () => {
  return (
    <Wrap>
      <PageTitle title="Product" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Wrap>
  );
};
