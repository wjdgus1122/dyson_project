import styled from "styled-components";

const IMG = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainBanner = () => {
  return (
    <IMG
      style={{
        background: `url(https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/markets/korea/products/personal-care/category/how-well-do-you-know-your-hair-3.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920) no-repeat center / cover`,
      }}
    ></IMG>
  );
};
