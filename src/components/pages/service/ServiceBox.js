import styled from "styled-components";
import { mainStyle } from "../../../styles/Globalstyle";

const ServiceBoxWrap = styled.div`
  margin-top: 60px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
`;

const BoxConWrap = styled.div`
  padding: 60px 90px 0 90px;
`;

const Box = styled.div`
  width: 380px;
  height: 250px;
  background-color: #efefef;
  span {
    font-size: 40px;
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
    margin: 15px 0;
  }
  p {
    font-size: 15px;
    font-weight: 100;
  }
`;

export const ServiceBox = () => {
  return (
    <ServiceBoxWrap>
      <Box>
        <BoxConWrap>
          <span>
            <i class="fa-solid fa-cart-flatbed"></i>
          </span>
          <h4>다이슨 서비스센터</h4>
          <p>
            7개의 다이슨 전문 서비스 센터에서 고객님을 위해 대기하고 있습니다.
          </p>
        </BoxConWrap>
      </Box>
      <Box>
        <BoxConWrap>
          <span>
            <i class="fa-solid fa-screwdriver-wrench"></i>
          </span>
          <h4>다이슨 수리 서비스</h4>
          <p>전국 어디서나 택배를 이용해 편리하게 수리 받으세요.</p>
        </BoxConWrap>
      </Box>
      <Box>
        <BoxConWrap>
          <span>
            <i class="fa-solid fa-square-phone"></i>
          </span>
          <h4>제품상담</h4>
          <p>보이는 ARS 서비스 또는 제품기술지원</p>
        </BoxConWrap>
      </Box>
      <Box>
        <BoxConWrap>
          <span>
            <i class="fa-solid fa-credit-card"></i>
          </span>
          <h4>고객센터 연락처</h4>
          <p>전화, 이메일, 카카오</p>
        </BoxConWrap>
      </Box>
    </ServiceBoxWrap>
  );
};
