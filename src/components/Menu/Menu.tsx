import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((elem, i) => {
          return (
            <li key={i}>
              <a href="">{elem}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
