import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
export const Project = (props: { projectText: string }) => {
  return (
    <StyledProject>
      <Title>Project Name</Title>
      <Text>{props.projectText}</Text>
      <Button align="flex-start">View Project</Button>
    </StyledProject>
  );
};
const StyledProject = styled.div`
  width: 40%;
  height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
`;
const Text = styled.p``;
const Title = styled.h3``;
