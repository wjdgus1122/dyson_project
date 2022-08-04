import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 120px",
  mopadding: "0 20px",
  mainColor: "#FF00AA",
  fontColor: "#1d1d1d",
  blackColor: "#333",
  mainRgbColor: "255,0,170",
  boxColor: "#EFEFEF",
  fontType: `"Comfortaa", cursive`,
};

export const Globalstyle = createGlobalStyle`
    ${reset}
   
    body{
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        word-break: keep-all;
    }
    a{
        text-decoration: none;
        color: #1d1d1d;
    }
`;
