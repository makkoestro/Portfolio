import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap="wrap" align="center" rowGap="95px" mediaGap="768px">
          <Skill iconId="vscode" />
          <Skill iconId="js" />
          <Skill iconId="css" />
          <Skill iconId="html" />
          <Skill
            iconId="greensock"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          />
          <Skill iconId="vector" />
          <Skill iconId="github" />
          <Skill iconId="git" />
          <Skill iconId="react" />
          <Skill iconId="sass" />
          <Skill iconId="bootstrap" viewBox="0 0 120 120" />
          <Skill iconId="tailwind" viewBox="10 10 120 120" />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};
const StyledSkills = styled.section`
  margin-top: 144px;

  background-color: ${theme.colors.bgColor};
  ${SectionTitle} {
    margin-bottom: 100px;
  }
`;
