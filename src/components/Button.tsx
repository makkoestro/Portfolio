import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  align?: string;
  bgColor?: string;
  borderRadius?: string;
  border?: string;
};
export const Button = styled.button<ButtonPropsType>`
  align-self: ${(props) => props.align};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  padding: 8px 24px;
  border: ${(props) => props.border};
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.primary};
`;
