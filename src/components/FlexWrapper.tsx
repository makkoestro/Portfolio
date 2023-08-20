import React from "react";
import styled from "styled-components";

type FlexWrapperPropsType = {
  justify?: string;
  direction?: string;
  align?: string;
  wrap?: string;
  gap?: string;
};
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap};
`;
