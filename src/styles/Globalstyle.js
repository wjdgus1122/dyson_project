import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 130px",
  mainColor: "#FF00AA",
  fontColor: "#1d1d1d",
  blackColor: "#333",
  mainRgbColor: "255,0,170",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
    body{
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: #1d1d1d;
    }
`;
