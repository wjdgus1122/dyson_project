import styled from "styled-components";
import { Container } from "../../Container";

const Section = styled.div`
  width: 100%;
  height: 50vh;
  background-color: beige;
`;

export const Section1 = () => {
  return (
    <Container>
      <Section></Section>
    </Container>
  );
};
