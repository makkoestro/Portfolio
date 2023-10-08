import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { css } from "styled-components";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <ul aria-label="menu" role="menu">
          {props.menuItems.map((elem, i) => {
            return (
              <li role="menuitem" aria-label="menu item" key={i}>
                <a href="">{elem}</a>
              </li>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 56px;
  height: 56px;
  z-index: 99999;
  top: 0;
  right: 0;

  span {
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${theme.colors.primary};
    position: absolute;
    /* top: 50%;
    left: 50%; */
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      background-color: ${theme.colors.primary};
      position: absolute;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          color: #ffffff0;
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      background-color: ${theme.colors.primary};
      position: absolute;
      transform: translateY(10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          color: #ffffff0;
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`;
const StyledMobileMenu = styled.nav`
  max-width: 292px;
  width: 100vw;
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`;
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffa600ee;
  z-index: 8;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ul {
    position: relative;
    z-index: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    font-family: "Raleway", sans-serif;
    font-size: 36px;
    a {
      color: ${theme.colors.primary};
      font-weight: 900;
    }
  }
`;
