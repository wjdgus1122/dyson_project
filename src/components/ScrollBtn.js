import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";

export const ScrollBtn = () => {
  const [scrBtn, setScrBtn] = useState(false);

  useEffect(() => {
    const handleScr = () => {
      if (window.scrollY > 100) {
        setScrBtn(true);
      } else {
        setScrBtn(false);
      }
    };
    window.addEventListener("scroll", handleScr);
    // return () => {
    //   window.removeEventListener("scroll", handleScr);
    // };
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrBtn && (
        <Btn onClick={onClick}>
          <FontAwesomeIcon icon={faChevronUp} />
        </Btn>
      )}
    </>
  );
};

const Btn = styled.button`
  all: unset;
  width: 50px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  line-height: 80px;
  border-radius: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  &:hover {
    background-color: rgba(${mainStyle.mainRgbColor}, 0.5);
  }
`;
