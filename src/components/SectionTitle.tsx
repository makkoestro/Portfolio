import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({ family: '"Playfair Display", serif', Fmax: "48", Fmin: "35" })};
  text-align: center;
  color: ${theme.colors.primary};
  position: relative;
  margin-bottom: 80px;
  &::before {
    content: "";
    display: inline-block;
    position: absolute; /* Абсолютное позиционирование */
    background: ${theme.colors.secondary};
    width: 100px;
    height: 4px;

    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    @media ${theme.media.tablet} {
      bottom: -6px;
    }
  }
`;
