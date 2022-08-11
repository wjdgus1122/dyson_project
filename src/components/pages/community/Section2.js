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
  return (
    <Container>
      <Wrap>
        <ConWrap>
          <Con
            className="eventBox"
            style={{
              background: `url(https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/campaigns/summer-2022/M2_CampaignPage_Module8.jpg?$responsive$&cropPathE=tablet&fit=stretch,1&wid=1025) no-repeat center /cover`,
            }}
          ></Con>

          <Title>다이슨 리뷰 이벤트</Title>
          <Date>2022년 8월 1일</Date>
          <Desc>
            지금 다이슨 리뷰 이벤트에 참여하시면 '참여자 전원' 액세서리 바우처를
            증정합니다.
          </Desc>
          <Btn>
            더보기
            <FontAwesomeIcon icon={faCaretRight} />
          </Btn>
        </ConWrap>
        {CommunityDB && (
          <>
            {CommunityDB.map((con) => (
              <ConWrap key={con.id}>
                <Con
                  className={con.id === 0 ? "newBox" : ""}
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
