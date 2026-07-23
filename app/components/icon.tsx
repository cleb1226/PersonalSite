import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FunctionComponent } from "react";

const IconMaker = (icon: IconDefinition, color?: string): FunctionComponent => {
  return () => (
    <FontAwesomeIcon icon={icon} className={color ? `text-${color}` : ""} />
  );
};

export default IconMaker;
