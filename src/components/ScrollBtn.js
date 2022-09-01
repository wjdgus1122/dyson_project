import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const ScrollBtn = () => {
  const [scrBtn, setScrBtn] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrBtn(true);
      } else {
        setScrBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      <Btn onClick={scrollUp}>
        <FontAwesomeIcon icon={faChevronUp} />
      </Btn>
    </>
  );
};

const Btn = styled.button`
  all: unset;
  position: fixed;
  bottom: 50px;
  right: 50px;
`;
