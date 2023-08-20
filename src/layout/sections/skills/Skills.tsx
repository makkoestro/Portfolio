import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap="wrap" align="center">
        <Skill iconId="vscode" />
        <Skill iconId="js" />
        <Skill iconId="css" />
        <Skill iconId="html" />
        <Skill iconId="greensock" />
        <Skill iconId="vector" />
        <Skill iconId="github" />
        <Skill iconId="git" />
        <Skill iconId="react" />
        <Skill iconId="sass" />
        <Skill iconId="bootstrap" />
        <Skill iconId="tailwind" />
      </FlexWrapper>
    </StyledSkills>
  );
};
const StyledSkills = styled.section`
  background-color: #bbdecf;
`;
