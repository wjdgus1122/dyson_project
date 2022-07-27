import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const MenuWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Menus = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
  font-size: 22px;
  font-weight: 700;
  width: 135px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px;
  a {
    color: #707070;
  }
  &.first {
    a {
      color: ${(props) => props.font1};
    }
  }
  &.sec {
    a {
      color: ${(props) => props.font2};
    }
  }
  &.thd {
    a {
      color: ${(props) => props.font3};
    }
  }
  &.first:hover {
    .line {
      width: 100%;
    }
    a {
      color: ${mainStyle.mainColor};
    }
  }
  &.sec:hover {
    .line {
      width: 100%;
    }
    a {
      color: ${mainStyle.mainColor};
    }
  }
  &.thd:hover {
    .line {
      width: 100%;
    }
    a {
      color: ${mainStyle.mainColor};
    }
  }
  &:last-child {
    width: 50px;
    align-items: end;
  }
`;
const Line = styled.div`
  height: 8px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${mainStyle.mainColor};
  position: absolute;
  top: 0;
  left: 0;
`;

export const Header = () => {
  const { pathname } = useLocation();
  const { fstfont, setFstFont } = useState(`#707070`);
  const { secfont, setSecFont } = useState(`#707070`);
  const { thdfont, setThdFont } = useState(`#707070`);
  const menuhandle = () => {
    if (pathname === "/product") {
      setFstFont(`${mainStyle.mainColor}`);
      setSecFont(`#707070`);
      setThdFont(`#707070`);
    } else if (pathname === "/service") {
      setFstFont(`#707070`);
      setSecFont(`${mainStyle.mainColor}`);
      setThdFont(`#707070`);
    } else if (pathname === "/community") {
      setFstFont(`#707070`);
      setSecFont(`#707070`);
      setThdFont(`${mainStyle.mainColor}`);
    }
  };

  return (
    <SHeader>
      <Link to={"/"}>
        <Logo>dyson</Logo>
      </Link>
      <MenuWrap>
        <Menus>
          <Menu onClick={menuhandle} font1={fstfont} className="first">
            <Line className="line" />
            <Link to={"/product"}>제품</Link>
          </Menu>
          <Menu onClick={menuhandle} font2={secfont} className="sec">
            <Line className="line" />
            <Link to={"/service"}>고객지원</Link>
          </Menu>
          <Menu onClick={menuhandle} font3={thdfont} className="thd">
            <Line className="line" />
            <Link to={"/community"}>커뮤니티</Link>
          </Menu>
          <Menu>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Menu>
        </Menus>
      </MenuWrap>
    </SHeader>
  );
};
