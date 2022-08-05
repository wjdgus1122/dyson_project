import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { CommunityDB } from "../../../TextDB";
import { Container } from "../../Container";

const Wrap = styled.div`
  margin-top: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 30px;
`;

const ConWrap = styled.div``;

const Con = styled.div`
  max-width: 395px;
  height: 350px;
  &::after {
    content: "New";
    font-size: 18px;
    font-weight: 500;
    color: white;
    padding: 5px 10px;
    background-color: ${mainStyle.mainColor};
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
  color: ${mainStyle.fontColor};
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 20px 0;
  color: ${mainStyle.fontColor};
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
`;

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
              className="newBox"
            ></Con>
            <Title>{con.title}</Title>
            <Date>{con.date}</Date>
            <Desc>{con.text.slice(0, 50) + "..."}</Desc>
          </ConWrap>
        ))}
      </Wrap>
    </Container>
  );
};
