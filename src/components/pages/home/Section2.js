import styled from "styled-components";
import { Container } from "../../Container";

const Section = styled.div`
  width: 100%;
  height: 150vh;
  background-color: beige;
  margin: 200px 0;
`;

export const Section2 = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};
