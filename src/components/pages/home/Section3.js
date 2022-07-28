import styled from "styled-components";
import { Container } from "../../Container";

const Section = styled.div`
  width: 100%;
  height: 150vh;
  background-color: beige;
  margin-bottom: 200px;
`;

export const Section3 = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};
