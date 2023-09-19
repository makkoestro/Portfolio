import React from "react";
import styled from "styled-components";
import Icon from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
type SkillPropsType = {
  iconId: string;
  viewBox?: string;
  width?: string;
  height?: string;
};
export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        viewBox={props.viewBox || "0 0 120 120"}
        width={props.width || "120px"}
        height={props.width || "120px"}
      ></Icon>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: calc(100% / 6);
  text-align: center;
  @media ${theme.media.tablet} {
    width: calc(100% / 4);
  }
  @media screen and (max-width: 360px) {
    width: calc(100% / 3);
  }
`;
