import styled from "styled-components";
import { Container } from "../../Container";

const Section = styled.div`
  width: 100%;
  height: 150vh;
  background-color: beige;
  margin: 200px 0;
  @media screen and (max-width: 500px) {
    height: 100vh;
    margin: 100px 0;
  }
`;

export const Section2 = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};
