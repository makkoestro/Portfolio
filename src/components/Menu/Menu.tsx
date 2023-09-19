import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul aria-label="menu" role="menu">
        {props.menuItems.map((elem, i) => {
          return (
            <li role="menuitem" aria-label="menu item" key={i}>
              <a href="">{elem}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  max-width: 292px;
  width: 100%;
  ul {
    position: relative;
    z-index: 7;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    line-height: 28px;
  }
  @media ${theme.media.mobile} {
    display: none;
  }
`;
