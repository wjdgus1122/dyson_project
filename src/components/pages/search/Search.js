import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { ProductDB } from "../../../TextDB";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: ${mainStyle.padding};
`;
const SearchInput = styled.form`
  padding-top: 130px;
  padding-bottom: 50px;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
    padding-top: 100px;
    padding-bottom: 30px;
  }
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 80px;
  color: #333;
  opacity: 0.8;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${mainStyle.mainColor};
  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;
const ConWrap = styled.div`
  width: 100%;
  display: grid;
  row-gap: 30px;
  column-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5px;
    column-gap: 15px;
  }
`;
const DbBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${mainStyle.boxColor};
`;
const DbName = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

export const Search = () => {
  const [sccon, setScCon] = useState(``);
  return (
    <Wrap>
      <SearchInput>
        <Input
          placeholder="제품명을 입력하세요."
          onChange={(event) => setScCon(event.target.value)}
        />
      </SearchInput>
      <ConWrap>
        {ProductDB.filter((post) => {
          if (sccon === "") {
            return;
          } else if (post.title.toLowerCase().includes(sccon.toLowerCase())) {
            return post;
          }
        }).map((post) => (
          <Link to={"/product/detail"}>
            <DbBox key={post.id}>
              <DbName>{post.title}</DbName>
            </DbBox>
          </Link>
        ))}
      </ConWrap>
    </Wrap>
  );
};
