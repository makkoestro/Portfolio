import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
export const Project = (props: {
  projectText: string;
  borderRadius: string;
}) => {
  return (
    <StyledProject borderRadius={props.borderRadius}>
      <ProjectWrapper>
        <Title>Project Name</Title>
        <Text>{props.projectText}</Text>
        <Button
          borderRadius="24px;"
          align="flex-start"
          border="1px solid #25282B"
        >
          View Project
        </Button>
      </ProjectWrapper>
    </StyledProject>
  );
};
type StyledProjectPropsType = {
  borderRadius: string;
};
const StyledProject = styled.div<StyledProjectPropsType>`
  max-width: 496px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: ${(props) => props.borderRadius};
  padding: 50px 15px;
  @media screen and (max-width: 1040px) {
    max-width: 350px;
    width: 100%;
    height: 394px;
  }
  @media screen and (max-width: 748px) {
    max-width: 500px;
    width: 100%;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 406.678px;
  width: 100%;
`;
const Text = styled.p`
  ${font({
    family: "Nunito",
    Fmax: "18",
    Fmin: "14",
    weight: "400",
  })};
  color: ${theme.colors.textColor};
`;
const Title = styled.h3`
  ${font({
    family: "Playfair Display",
    Fmax: "40",
    Fmin: "25",
    weight: "700",
  })};
`;
