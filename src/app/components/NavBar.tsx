import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <NavContainer $show={show}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Avatar"
      />
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  transition: 0.5s ease;
  background-color: ${({ $show }) => ($show ? "black" : "transparent")};

  img {
    width: 80px;
  }
`;
