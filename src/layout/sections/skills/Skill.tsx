import React from "react";
import styled from "styled-components";
import Icon from "../../../components/icon/Icon";
type SkillPropsType = {
  iconId: string;
};
export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}></Icon>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: calc(100% / 6);
  text-align: center;
`;
