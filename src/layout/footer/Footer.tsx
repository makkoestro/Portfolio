import React from "react";
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align="center" direction="column">
        <SocialIconList>
          <SocialIconItem>
            <SocialIconLink>
              <Icon
                iconId="instagram"
                width="48px"
                height="48px"
                viewBox="0 0 48px 48px"
              />
            </SocialIconLink>
          </SocialIconItem>

          <SocialIconItem>
            <SocialIconLink>
              <Icon
                iconId="linkedIn"
                width="48px"
                height="48px"
                viewBox="0 0 48px 48px"
              />
            </SocialIconLink>
          </SocialIconItem>

          <SocialIconItem>
            <SocialIconLink>
              <Icon
                iconId="mail"
                width="48px"
                height="48px"
                viewBox="0 0 48px 48px"
              />
            </SocialIconLink>
          </SocialIconItem>
        </SocialIconList>
        <small>Madelyn Torff 2021</small>
      </FlexWrapper>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  background-color: #b8b8eb;
  min-height: 30vh;
`;
const SocialIconList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialIconLink = styled.a``;
const SocialIconItem = styled.li`
  text-align: center;
  list-style: none;
`;
