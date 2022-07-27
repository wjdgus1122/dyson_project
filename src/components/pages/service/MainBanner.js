import styled from "styled-components";

const MainBannerWrap = styled.div`
  background: url(https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/markets/korea/care/carepage-banner.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920);
  height: 570px;
`;
const ConWrap = styled.div`
  color: white;
  padding: 85px 0 0 240px;
  h1 {
    font-size: 100px;
    font-weight: 500;
  }
`;
const Title = styled.h3`
  font-size: 60px;
`;

export const MainBanner = () => {
  return (
    <MainBannerWrap>
      <ConWrap>
        <Title>dyson</Title>
        <h1>고객지원</h1>
      </ConWrap>
    </MainBannerWrap>
  );
};
