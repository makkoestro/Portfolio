import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu/Menu";

const items = ["About", "Projects", "Contacts"];
export const Header = () => {
  return (
    <StyledHeader>
      <StyledName>Vahid Navazan</StyledName>
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #2796a2;
  display: flex;
  justify-content: space-between;
`;
const StyledName = styled.span`
  font-size: 20px;
`;
