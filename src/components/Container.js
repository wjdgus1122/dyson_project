import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";

const SContainer = styled.div`
  padding: ${mainStyle.padding};
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
