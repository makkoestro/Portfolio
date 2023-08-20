import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./Project";
import projectimg from "../../../assets/img/photo2.webp";
import noteimg from "../../../assets/img/note.webp";
import smartphoneimg from "../../../assets/img/smartphone.webp";
export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper justify="center" wrap="wrap" gap="35px">
        <ProjectBlock>
          <Project projectText="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example." />
          <ProjectImg src={projectimg} />
        </ProjectBlock>
        <ProjectBlock>
          <ProjectImg src={noteimg} />
          <Project projectText="What was your role, your deliverables, if the project was personal, freelancing." />
        </ProjectBlock>
        <ProjectBlock>
          <Project projectText="You can also add in this description the type of the project, if it was for web, mobile, electron." />
          <ProjectImg src={smartphoneimg} />
        </ProjectBlock>
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: #fbbdbd;
`;

const ProjectImg = styled.img`
  width: 40%;
  height: 526px;
  object-fit: cover;
`;
const ProjectBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
