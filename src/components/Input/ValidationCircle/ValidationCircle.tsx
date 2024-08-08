import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./ValidationCircle.module.scss";
import classNames from "classnames";

interface ValidationCircleProps {
  isValidated?: boolean | null;
  errorMessage?: string;
  isEmpty?: boolean;
}

const ValidationCircle: React.FC<ValidationCircleProps> = ({
  isValidated,
  errorMessage,
  isEmpty,
}) => {
  console.log(isValidated === true, "check");
  return (
    <Tooltip
      title={errorMessage || ""}
      placement="right"
      disableHoverListener={isValidated !== false}
    >
      <div
        className={classNames(
          styles.circle,
          isEmpty && styles.empty,
          isValidated === true && styles.valid,
          isValidated === false && styles.invalid
        )}
      ></div>
    </Tooltip>
  );
};

export default ValidationCircle;
