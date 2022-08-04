import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";

const Wrap = styled.div`
  padding: 0 120px;
`;

const BoxWrap = styled.div`
  position: absolute;
  bottom: -70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: ${mainStyle.mainColor};
    font-size: 40px;
    margin: 0 20px;
  }
`;
const Box = styled.div`
  max-width: 475px;
  height: 200px;
  background-color: ${mainStyle.boxColor};
  padding: 30px 50px;
`;
const BoxText = styled.div`
  max-width: 400px;
`;
const Name = styled.div`
  color: ${mainStyle.mainColor};
  /* margin-bottom: 40px; */
  font-size: 30px;
  font-weight: 700;
`;
const Message = styled.div`
  color: ${mainStyle.fontColor};
  opacity: 0.7;
  font-size: 20px;
  line-height: 26px;
  margin: 40px 0 30px 0;
`;

export const Section1 = () => {
  return (
    <Wrap>
      <BoxWrap>
        <Box>
          <BoxText>
            <Name>Step 1</Name>
            <Message>
              다이슨 제품 등록 후 개인정보처리방침 및 마케팅 수신에
              동의해주세요.
              <br />
              (필수요건, 일련번호당 1회)
            </Message>
          </BoxText>
        </Box>
        <FontAwesomeIcon icon={faChevronRight} />
        <Box>
          <BoxText>
            <Name>Step 2</Name>
            <Message>
              추후 바우처 지급을 위해 하기 링트의 포멧을 작성해주세요.
            </Message>
          </BoxText>
        </Box>
        <FontAwesomeIcon icon={faChevronRight} />
        <Box>
          <BoxText>
            <Name>Step 1</Name>
            <Message>
              구매한 상품 상세페이지에서 제품 리뷰를 작성해주세요.
              <br />
              (리뷰 작성 시, 제품 등록 시 입력한 이메일과 동일한 이메일 작성
              필수)
            </Message>
          </BoxText>
        </Box>
      </BoxWrap>
    </Wrap>
  );
};
