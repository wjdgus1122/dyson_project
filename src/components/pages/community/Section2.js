import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { CommunityDB } from "../../../TextDB";
import { Container } from "../../Container";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 100px;
  margin: 200px 0 100px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ConWrap = styled.div`
  .eventBox::after {
    content: "Event";
    font-size: 18px;
    font-weight: 500;
    color: white;
    padding: 5px 10px;
    background-color: ${mainStyle.mainColor};
    position: relative;
    top: -5px;
    right: -340px;
  }
  .newBox::after {
    content: "New";
    font-size: 18px;
    font-weight: 500;
    color: white;
    padding: 5px 10px;
    background-color: #307800;
    position: relative;
    top: -5px;
    right: -340px;
  }
  @media screen and (max-width: 500px) {
    .eventBox::after {
      content: "Event";
      font-size: 14px;
      font-weight: 500;
      color: white;
      padding: 5px 10px;
      background-color: ${mainStyle.mainColor};
      position: relative;
      top: -5px;
      right: -390px;
    }
    .newBox::after {
      content: "New";
      font-size: 14px;
      font-weight: 500;
      color: white;
      padding: 5px 10px;
      background-color: #307800;
      position: relative;
      top: -5px;
      right: -400px;
    }
  }
`;

const Con = styled.div`
  max-width: 395px;
  height: 350px;
  @media screen and (max-width: 500px) {
    height: 200px;
    max-width: 500px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    margin: 10px 0;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 20px 0;
  color: ${mainStyle.fontColor};
  @media screen and (max-width: 500px) {
    margin: 10px 0;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 100;
  color: ${mainStyle.fontColor};
`;

const Btn = styled.button`
  all: unset;
  font-size: 20px;
  svg {
    color: ${mainStyle.mainColor};
    margin-left: 10px;
  }
`;

export const Section2 = () => {
  const [event, setEvent] = useState();
  const [newEl, setNewEl] = useState();

  useEffect(() => {
    const eventEl = CommunityDB.shift();
    setEvent(eventEl);

    const newEl = CommunityDB.shift();
    setNewEl(newEl);
  }, []);

  console.log(newEl);

  return (
    <Container>
      <Wrap>
        {event && (
          <>
            <ConWrap>
              <Con
                className="eventBox"
                style={{
                  background: `url(${event.bgimg}) no-repeat center/cover`,
                }}
              ></Con>
              <Title>{event.title}</Title>
              <Date>{event.date}</Date>
              <Desc>{event.text.slice(0, 50) + "..."}</Desc>
              <Btn>
                더보기
                <FontAwesomeIcon icon={faCaretRight} />
              </Btn>
            </ConWrap>
          </>
        )}
        {newEl && (
          <>
            <ConWrap>
              <Con
                className="newBox"
                style={{
                  background: `url(${newEl.bgimg}) no-repeat center/cover`,
                }}
              ></Con>
              <Title>{newEl.title}</Title>
              <Date>{newEl.date}</Date>
              <Desc>{newEl.text.slice(0, 50) + "..."}</Desc>
              <Btn>
                더보기
                <FontAwesomeIcon icon={faCaretRight} />
              </Btn>
            </ConWrap>
          </>
        )}
        {CommunityDB && (
          <>
            {CommunityDB.map((con) => (
              <ConWrap key={con.id}>
                <Con
                  style={{
                    background: `url(${con.bgimg}) no-repeat center/cover`,
                  }}
                ></Con>
                <Title>{con.title}</Title>
                <Date>{con.date}</Date>
                <Desc>{con.text.slice(0, 50) + "..."}</Desc>
                <Btn>
                  더보기
                  <FontAwesomeIcon icon={faCaretRight} />
                </Btn>
              </ConWrap>
            ))}
          </>
        )}
      </Wrap>
    </Container>
  );
};
