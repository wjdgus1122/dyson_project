import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";

const Section3Wrap = styled.div`
  margin-top: 130px;
`;

const Section3Banner = styled.div``;

const CsServiceWrap = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  padding: ${mainStyle.padding};
`;
const CsCon = styled.div`
  h3 {
    font-size: 50px;
    font-weight: 500;
    color: ${mainStyle.mainColor};
    :nth-child(2) {
      margin-bottom: 80px;
    }
  }
  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: ${mainStyle.fontColor};
    margin-bottom: 30px;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: ${mainStyle.fontColor};
  }
`;
const CsForm = styled.div`
  width: 50%;
  height: 80vh;
  border: 1px solid ${mainStyle.mainColor};
`;

const FormBox = styled.form`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 15px;

  input {
    margin-bottom: 10px;
    &::placeholder {
      color: #000;
      padding-left: 10px;
    }
  }
  .QNA {
    all: unset;
    background-color: #f3f3f3;
    width: 100%;
    height: 300px;
    padding: 10px 10px;
    &::placeholder {
      color: #000;
    }
  }
  .sendBtn {
    all: unset;
  }
  .mail {
    all: unset;
    background-color: #f3f3f3;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
  }
  .cate {
    all: unset;
    background-color: #f3f3f3;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
  }
`;

const InputName = styled.form`
  display: flex;

  margin-bottom: 10px;
  .inputname {
    all: unset;
    width: 50%;
    margin-right: 10px;
    background-color: #f3f3f3;
    &::placeholder {
      /* color: #000; */
      padding-left: 10px;
    }
  }
  p {
    margin-right: 20px;
  }
`;

const InputNameCate = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  input {
    margin-right: 10px;
    margin-top: 10px;
  }
  label {
    margin-right: 20px;
  }
`;

const InputCategory = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  padding: 0 10px;
  margin-bottom: 10px;
  &::placeholder {
    color: #000;
    padding-left: 10px;
  }
  .product label {
    all: unset;
  }
  input {
    margin-left: 50px;
  }
  .check {
    margin-top: 11px;
  }
`;

const AgreeBtn = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  .agree {
    margin-right: -220px;
  }
  .sendBtn {
    font-size: 16px;
    color: ${mainStyle.mainColor};
    width: 150px;
    height: 40px;
    border: 1px solid ${mainStyle.mainColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Section3 = () => {
  return (
    <>
      <Container />
      <Section3Wrap>
        <Section3Banner>
          <img
            src={require("./Image/section3.png")}
            width="100%"
            alt="dyson service center"
          />
        </Section3Banner>
        <CsServiceWrap>
          <CsCon>
            <h3>dyson</h3>
            <h3>제품상담</h3>
            <p>
              다이슨에 연락하고 싶거나 궁금한 점이 있으세요?
              <br /> 옆의 문의 양식을 이용해서 직접 연락하는 방법, <br />
              소비자 상담실에 연락하는 방법이 있습니다. <br />
              다이슨 소비자 상담실: 080-300-4253(수신자 부담) / 1588-4253
              <br /> 운영시간: 월-금 오전 9시-오후 6시
            </p>
            <span>
              다이슨 코리아(유) <br />
              서울특별시 강남구 테헤란로 142, 아크플레이스 17층 06236 <br />
              Email: help@kr.dyson.com
            </span>
          </CsCon>
          <CsForm>
            <FormBox>
              <form>
                <InputName>
                  <input type="text" placeholder="이름" className="inputname" />
                  <InputNameCate>
                    <p>성별</p>
                    <input type="radio" name="성별" id="남" />
                    <label for="남">남</label>
                    <input type="radio" name="성별" id="여" />
                    <label for="여">여</label>
                  </InputNameCate>
                </InputName>

                <input type="email" placeholder="email" className="mail" />
                <br />
                <input type="text" placeholder="문의유형" className="cate" />
                <br />
                <InputCategory>
                  <h3>카테고리</h3>
                  <input
                    type="checkbox"
                    name="카테고리"
                    id="헤어케어"
                    className="check"
                  />
                  <label for="헤어케어" className="product">
                    헤어케어
                  </label>
                  <input
                    type="checkbox"
                    name="청소기"
                    id="청소기"
                    className="check"
                  />
                  <label for="청소기" className="product">
                    청소기
                  </label>
                  <input
                    type="checkbox"
                    name="공기청정기"
                    id="공기청정기"
                    className="check"
                  />
                  <label for="공기청정기" className="product">
                    공기청정기
                  </label>
                  <input
                    type="checkbox"
                    name="조명"
                    id="조명"
                    className="check"
                  />
                  <label for="조명" className="product">
                    조명
                  </label>
                  <input
                    type="checkbox"
                    name="부품"
                    id="부품"
                    className="check"
                  />
                  <label for="부품" className="product">
                    부품
                  </label>
                </InputCategory>
                <textarea type="text" placeholder="문의사항" className="QNA" />
                <br />
                <AgreeBtn>
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    className="agree"
                  />
                  <label for="agree">
                    다이슨의 개인정보처리방침을
                    <br /> 읽었으며, 이에 동의합니다.
                  </label>
                  <button className="sendBtn">
                    <p>SEND ▸</p>
                  </button>
                </AgreeBtn>
              </form>
            </FormBox>
          </CsForm>
        </CsServiceWrap>
      </Section3Wrap>
    </>
  );
};
