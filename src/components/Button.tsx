import styled from "styled-components";

type ButtonPropsType = {
  align?: string;
};
export const Button = styled.button<ButtonPropsType>`
  align-self: ${(props) => props.align};
`;
