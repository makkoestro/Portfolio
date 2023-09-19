type FontPropsType = {
  family?: string;
  weight?: string;
  color?: string;
  lineHeight?: string;
  Fmin?: string;
  Fmax?: string;
};
export const font = ({
  Fmin,
  Fmax,
  family,
  weight,
  color,
  lineHeight,
}: FontPropsType) => `
    font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    font-family: ${family};
    line-height: ${lineHeight};
    font-weight: ${weight};
`;
