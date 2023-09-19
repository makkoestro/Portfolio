import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "../../components/Menu/MobileMenu";

const items = ["About", "Projects", "Contacts"];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <StyledName>Vahid Navazan</StyledName>
          <Menu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.bgColor};
  padding: 12px 0;
`;
const StyledName = styled.span`
  font-size: 18px;
  font-family: "Comfortaa", cursive;
  line-height: 32.4px;
  white-space: nowrap;
  @media ${theme.media.mobile} {
    align-self: flex-start;
    padding-left: 15px;
  }
`;
