import React from "react";
import photo from "../../assets/img/girlWithBg.png";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Button } from "../../components/Button";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import bgImg from "../../assets/img/yellow-bg.svg";
import { font } from "../../styles/Common";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper media="867px">
          <Intro>
            {/* <MainTitle>software developer</MainTitle> */}
            <MainTitle>
              <p>software developer</p>
              <Typewriter
                options={{
                  strings: ["software developer", "frontend developer"],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </MainTitle>
            <Presenting>
              Hello, my name is <span>Vahid Navazan</span>{" "}
            </Presenting>
            <Description>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </Description>
            <Buttons>
              <Button
                as="a"
                borderRadius="8px"
                bgColor={theme.colors.secondary}
                border="2px solid #FDC435"
              >
                Projects
              </Button>
              <Button
                as="a"
                borderRadius="8px"
                border="2px solid #25282B"
                href="https://www.linkedin.com/feed/"
              >
                LinkedIn
              </Button>
            </Buttons>
          </Intro>
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <Photo src={photo} alt="" />
          </Tilt>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: ${theme.colors.bgColor};
  display: flex;
`;
const Photo = styled.img`
  object-fit: cover;
  max-width: 720px;
  width: 100%;
  height: 629px;
  margin-top: -60px;
  margin-right: -100px;
  @media screen and (max-width: 867px) {
    /* margin-right: 0;
    margin-top: 30px;
    max-width: 550px;
    width: 100%;
    height: 450px; */
    display: none;
  }
`;
const Intro = styled.div`
  margin-top: 55px;
  max-width: 510px;
  width: 100%;
  & :nth-child(1n + 3) {
    margin-top: 32px;
  }
  @media screen and (max-width: 867px) {
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
  }
`;
const MainTitle = styled.h1`
  ${font({ family: "Nunito", Fmax: "20", Fmin: "15", weight: "400" })};
  color: ${theme.colors.secondary};
  @media screen and (max-width: 867px) {
    color: ${theme.colors.primary};
  }
  text-transform: uppercase;
  p {
    display: none;
  }
`;
const Presenting = styled.h2`
  margin-top: 12px;
  ${font({ family: "'Roboto', sans-serif", Fmax: "64", Fmin: "36" })}
  span {
    white-space: nowrap;
  }
`;
const Description = styled.p`
  max-width: 486px;
  width: 100%;
  ${font({ family: "Nunito", Fmax: "24", Fmin: "14", weight: "400" })};
`;
const Buttons = styled.div`
  display: flex;
  a:nth-child(2) {
    margin-left: 12px;
  }
`;
