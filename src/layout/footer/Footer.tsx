import React from "react";
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import footerImg from "../../assets/img/footerImg.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column" align="center">
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

            <SocialIconItem padding="4px">
              <SocialIconLink>
                <Icon
                  iconId="linkedIn"
                  width="48px"
                  height="48px"
                  viewBox="0 0 48px 48px"
                />
              </SocialIconLink>
            </SocialIconItem>

            <SocialIconItem padding="6px">
              <SocialIconLink>
                <Icon
                  iconId="mail"
                  width="42px"
                  height="32px"
                  viewBox="0 0 42px 32px"
                />
              </SocialIconLink>
            </SocialIconItem>
          </SocialIconList>
          <Signature>Madelyn Torff 2021</Signature>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${footerImg});
  background-size: cover;
  margin-top: 55px;
`;
const SocialIconList = styled.ul`
  display: flex;
`;
const SocialIconLink = styled.a``;

type SocialIconItemPropsType = {
  padding?: string;
};
const SocialIconItem = styled.li<SocialIconItemPropsType>`
  text-align: center;
  list-style: none;
  padding-top: ${(props) => props.padding};
`;
const Signature = styled.small`
  margin-top: 32px;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.textColor};
`;
