import React from "react";
import photo from "../../assets/img/photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Button } from "../../components/Button";
export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-around" align="center">
        <div>
          <MainTitle>Software Developer</MainTitle>
          <Presenting>Hello, my name is Vahid Navazan</Presenting>
          <Description>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </Description>
          <Buttons>
            <Button>Projects</Button>
            <Button>LinkedIn</Button>
          </Buttons>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: #f5e5bc;
`;
const Photo = styled.img`
  object-fit: cover;
`;
const MainTitle = styled.h1``;
const Presenting = styled.h2``;
const Description = styled.p``;
const Buttons = styled.div``;
