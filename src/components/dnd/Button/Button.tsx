import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  className,
  type = "button",
  ...props
}: Props) {
  const buttonClasses = classNames(styles.Button, className);

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
