import React from "react";
import iconsSprite from "../../assets/img/icons-sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};
const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "50px"}
      height={props.height || "50px"}
      viewBox={props.viewBox || "0 0 112 112"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};

export default Icon;
