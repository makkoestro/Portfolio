import React from "react";
import styled, { css } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./Project";
import projectimg from "../../../assets/img/firstCardImg.webp";
import noteimg from "../../../assets/img/note.webp";
import smartphoneimg from "../../../assets/img/smartphone.webp";
import { Container } from "../../../components/Container";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper justify="center" wrap="wrap" gap="80px">
          <ProjectBlock>
            <Project
              borderRadius="25px 0 0 25px"
              projectText="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
            />
            <ProjectImg
              id="1"
              borderRadius="0 25px 25px 0"
              src={projectimg}
              alt=""
            />
          </ProjectBlock>
          <ProjectBlock>
            <ProjectImg borderRadius="25px 0 0 25px" src={noteimg} alt="" />
            <Project
              borderRadius="0 25px 25px 0"
              projectText="What was your role, your deliverables, if the project was personal, freelancing."
            />
          </ProjectBlock>
          <ProjectBlock>
            <Project
              borderRadius="25px 0 0 25px"
              projectText="You can also add in this description the type of the project, if it was for web, mobile, electron."
            />
            <ProjectImg
              borderRadius="0 25px 25px 0"
              src={smartphoneimg}
              alt=""
            />
          </ProjectBlock>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  margin-top: 180px;
  margin-bottom: 145px;
`;
export const ProjectBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  & div:nth-child(2) {
    border-radius: 0 0 25px 25px;
  }
`;

type ProjectImgType = {
  borderRadius: string;
};
const ProjectImg = styled.img<ProjectImgType>`
  max-width: 496px;
  width: 100%;
  height: 524px;
  border-radius: 10px;
  object-fit: cover;
  /* ${(props) =>
    props.id &&
    css<ProjectImgType>`
      object-position: 40% 80%;
    `} */
  @media screen and (max-width: 1040px) {
    max-width: 350px;
    width: 100%;
    height: 394px;
  }
  @media screen and (max-width: 748px) {
    max-width: 500px;
    width: 100%;
    height: 394px;
  }
`;
