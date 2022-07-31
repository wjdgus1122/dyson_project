import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";
import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: ${(props) => props.color};
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
const MenuWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
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
  svg {
    color: ${(props) => props.iconcolor};
  }
  &.first {
    .line {
      width: ${(props) => props.line1};
    }
    a {
      color: ${(props) => props.font1};
    }
  }
  &.sec {
    .line {
      width: ${(props) => props.line2};
    }
    a {
      color: ${(props) => props.font2};
    }
  }
  &.thd {
    .line {
      width: ${(props) => props.line3};
    }
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
  &:nth-child(4) {
    width: 50px;
    margin-right: 0;
  }
  &:last-child {
    width: 50px;
    align-items: end;
    font-size: 25px;
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
const MoMenuWrap = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const Header = () => {
  const [fstfont, setFstFont] = useState(``);
  const [secfont, setSecFont] = useState(``);
  const [thdfont, setThdFont] = useState(``);
  const [fstline, setFstLine] = useState(``);
  const [secline, setSecLine] = useState(``);
  const [thdline, setThdLine] = useState(``);
  const [hdcolor, setHdColor] = useState(`white`);
  const [logocolor, setLogoColor] = useState("#333");
  const [svgcolor, setSvgColor] = useState("#333");
  const menuhandle1 = () => {
    setFstFont(`${mainStyle.mainColor}`);
    setSecFont(`#707070`);
    setThdFont(`#707070`);
    setFstLine("100%");
    setSecLine("0");
    setThdLine("0");
  };
  const menuhandle2 = () => {
    setFstFont(`#707070`);
    setSecFont(`${mainStyle.mainColor}`);
    setThdFont(`#707070`);
    setFstLine("0");
    setSecLine("100%");
    setThdLine("0");
  };
  const menuhandle3 = () => {
    setFstFont(`#707070`);
    setSecFont(`#707070`);
    setThdFont(`${mainStyle.mainColor}`);
    setFstLine("0");
    setSecLine("0");
    setThdLine("100%");
  };
  const menuhandle4 = () => {
    setFstFont(`#707070`);
    setSecFont(`#707070`);
    setThdFont(`#707070`);
    setFstLine("0");
    setSecLine("0");
    setThdLine("0");
  };
  const sclhandle = () => {
    const scl = window.pageYOffset;
    if (scl > 400) {
      setHdColor("#333");
      setLogoColor("white");
      if (fstfont === mainStyle.mainColor) {
        setFstFont(`${mainStyle.mainColor}`);
        setSecFont("white");
        setThdFont("white");
        setSvgColor("white");
      } else if (secfont === mainStyle.mainColor) {
        setFstFont("white");
        setSecFont(`${mainStyle.mainColor}`);
        setThdFont("white");
        setSvgColor("white");
      } else if (thdfont === mainStyle.mainColor) {
        setFstFont("white");
        setSecFont("white");
        setThdFont(`${mainStyle.mainColor}`);
        setSvgColor("white");
      } else {
        setFstFont("white");
        setSecFont("white");
        setThdFont("white");
        setSvgColor("white");
      }
    } else {
      setHdColor("white");
      setLogoColor("#333");
      if (fstfont === mainStyle.mainColor) {
        setFstFont(`${mainStyle.mainColor}`);
        setSecFont("#707070");
        setThdFont("#707070");
        setSvgColor("#333");
      } else if (secfont === mainStyle.mainColor) {
        setFstFont("#707070");
        setSecFont(`${mainStyle.mainColor}`);
        setThdFont("#707070");
        setSvgColor("#333");
      } else if (thdfont === mainStyle.mainColor) {
        setFstFont("#707070");
        setSecFont("#707070");
        setThdFont(`${mainStyle.mainColor}`);
        setSvgColor("#333");
      } else {
        setFstFont("#707070");
        setSecFont("#707070");
        setThdFont("#707070");
        setSvgColor("#333");
      }
    }
  };
  window.addEventListener("scroll", sclhandle);
  return (
    <SHeader color={hdcolor}>
      <Link to={"/"}>
        <Logo onClick={menuhandle4} color={logocolor}>
          dyson
        </Logo>
      </Link>
      <MenuWrap>
        <Menus>
          <Menu
            onClick={menuhandle1}
            font1={fstfont}
            line1={fstline}
            className="first"
          >
            <Line className="line" />
            <Link to={"/product"}>제품</Link>
          </Menu>
          <Menu
            onClick={menuhandle2}
            font2={secfont}
            line2={secline}
            className="sec"
          >
            <Line className="line" />
            <Link to={"/service"}>고객지원</Link>
          </Menu>
          <Menu
            onClick={menuhandle3}
            font3={thdfont}
            line3={thdline}
            className="thd"
          >
            <Line className="line" />
            <Link to={"/community"}>커뮤니티</Link>
          </Menu>
          <Menu iconcolor={svgcolor}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Menu>
          <Menu iconcolor={svgcolor}>
            <FontAwesomeIcon icon={faBagShopping} />
          </Menu>
        </Menus>
      </MenuWrap>
      <MoMenuWrap>
        <Menu>
          <FontAwesomeIcon icon={faBars} />
        </Menu>
      </MoMenuWrap>
    </SHeader>
  );
};
