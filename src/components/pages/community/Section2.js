import styled from "styled-components";
import { CommunityDB } from "../../../TextDB";
import { Container } from "../../Container";

const Wrap = styled.div`
  margin-top: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ConWrap = styled.div``;

const Con = styled.div`
  width: 395px;
  height: 350px;
`;

const Title = styled.div``;

const Desc = styled.div``;

const Date = styled.div``;

export const Section2 = () => {
  return (
    <Container>
      <Wrap>
        {CommunityDB.map((con) => (
          <ConWrap>
            <Con
              key={con.id}
              style={{
                background: `url(${con.bgimg}) no-repeat center/cover`,
              }}
            ></Con>
            <Title>{con.title}</Title>
            <Date>{con.date}</Date>
            <Desc>{con.text}</Desc>
          </ConWrap>
        ))}
      </Wrap>
    </Container>
  );
};
