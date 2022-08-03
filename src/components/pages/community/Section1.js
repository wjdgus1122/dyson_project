import styled from "styled-components";

const BoxWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Box = styled.div`
  width: 30%;
  height: 30%;
  background-color: gray;
`;
const TextWrap = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;

export const Section1 = () => {
  return (
    <>
      <BoxWrap>
        <Box>
          <TextWrap>
            <Title></Title>
            <Desc></Desc>
          </TextWrap>
        </Box>
      </BoxWrap>
    </>
  );
};
