import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";
import { Container } from "../../Container";
import phone from "./Image/mobile.png";
import pinklogo from "./Image/pinklogo.png";
import responcs from "./Image/responcs.png";
import webbanner from "./Image/section3.png";

const Section3Wrap = styled.div`
  margin-top: 130px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 120px;
  }
`;

const WebMainBanner = styled.div`
  width: 100%;
  height: 400px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileBanner = styled.div`
  width: 100%;
  height: 78px;
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
  }
`;

const CsServiceWrap = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 40px;
    padding: 0;
    flex-direction: column;
  }
`;

const PhoneImg = styled.div`
  margin: 30px 0;
  width: 426px;
  height: 280px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;

const CsCon = styled.div`
  h3 {
    font-size: 50px;
    font-weight: 500;
    color: ${mainStyle.mainColor};
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
  }
  p {
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 500;
    line-height: 25px;
    color: ${mainStyle.fontColor};
  }
  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: ${mainStyle.fontColor};
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    .web {
      display: none;
    }
    .side {
      display: none;
    }
    .pink {
      display: none;
    }
    h3 {
      display: none;
    }
    h4 {
      width: 90%;
      font-size: 24px;
      font-weight: 700;
    }
    p {
      margin-top: -10px;
      font-size: 16px;
      font-weight: 100;
      margin-bottom: 20px;
    }
    span {
      font-size: 16px;
      font-weight: 100;
    }
  }
`;
const CsForm = styled.div`
  width: 80%;
  height: 80vh;

  border: 1px solid ${mainStyle.mainColor};
  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
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

    &::placeholder {
      color: #000;
      padding-top: 10px;
      padding-left: 10px;
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
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 10px;
    margin-top: 40px;
    .mail {
      width: 94%;
    }
    .cate {
      width: 94%;
    }
    .QNA {
      width: 94%;
      height: 250px;
    }
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
      padding-left: 10px;
    }
  }
  p {
    margin-right: 20px;
  }
  @media screen and (max-width: 500px) {
    .inputname {
      width: 43%;
    }
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
  p {
    padding-left: 10px;
  }
  label {
    margin-right: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 48%;

    label {
      margin-right: 10px;
    }
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
  @media screen and (max-width: 500px) {
    width: 82.5%;
    flex-wrap: wrap;
    padding: ${mainStyle.mopadding};
    input {
      margin-left: 5px;
    }
    h3 {
      margin-left: -10px;
    }
    .check {
      :nth-child(2) {
        margin-left: 14px;
      }
      :nth-child(6) {
        margin-left: 60px;
      }
    }
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
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 50px;
    font-size: 14px;
    .agree {
      margin-right: 5px;
      padding-left: 15px;
    }
    .sendBtn {
      width: 140px;
      height: 40px;
      margin-right: 20px;
    }
  }
`;

export const Section3 = () => {
  return (
    <>
      <Section3Wrap>
        <WebMainBanner
          style={{
            background: `url(${webbanner}) no-repeat center / cover`,
          }}
        ></WebMainBanner>
        <MobileBanner
          style={{
            background: `url(${responcs}) no-repeat center / cover`,
          }}
        />

        <CsServiceWrap>
          <Container>
            <CsCon>
              <img
                className="pink"
                src={pinklogo}
                width="202px"
                height="76px"
                alt="dysonlogo"
              />
              <h3>제품상담</h3>
              <PhoneImg
                style={{
                  background: `url(${phone}) no-repeat center / cover`,
                }}
              />
              <h4>다이슨에 연락하고 싶거나 궁금한 점이 있으세요?</h4>
              <p>
                <br /> <span className="side">옆의</span> 문의 양식을 이용해서
                직접 연락하는 방법, <br />
                소비자 상담실에 연락하는 방법이 있습니다. <br />
                다이슨 소비자 상담실: 080-300-4253(수신자 부담) / 1588-4253
                <br /> 운영시간: 월-금 오전 9시-오후 6시
              </p>
              <span className="web">
                다이슨 코리아(유) <br />
                서울특별시 강남구 테헤란로 142, 아크플레이스 17층 06236 <br />
                Email: help@kr.dyson.com
              </span>
            </CsCon>
          </Container>
          <Container>
            <CsForm>
              <FormBox>
                <form>
                  <Container>
                    <InputName>
                      <input
                        type="text"
                        placeholder="이름"
                        className="inputname"
                      />
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
                    <input
                      type="text"
                      placeholder="문의유형"
                      className="cate"
                    />
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
                    <textarea
                      type="text"
                      placeholder="문의사항"
                      className="QNA"
                    />
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
                  </Container>
                </form>
              </FormBox>
            </CsForm>
          </Container>
        </CsServiceWrap>
      </Section3Wrap>
    </>
  );
};
