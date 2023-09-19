import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperPropsType = {
  justify?: string;
  direction?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  rowGap?: string;
  media?: string;
  mediaGap?: string;
};
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap};
  height: 100%;
  row-gap: ${(props) => props.rowGap};
  position: relative;
  @media screen and (max-width: ${(props) => props.media}) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: ${(props) => props.mediaGap}) {
    row-gap: 50px;
  }
`;
