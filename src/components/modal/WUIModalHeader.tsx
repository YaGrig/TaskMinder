import React from "react";
import classNames from "classnames";
import { ChevronLeftIcon, CloseIcon } from "../WUIIcon";
import styles from "./WUIModal.module.scss";

type WUIModalHeaderProps = {
  title?: string;
  closeIcon?: boolean;
  className?: string;
  titleClassName?: string;
  onBackPress?: () => void;
  classNameCloseIcon?: string;
  closeIconSize?: number;
  onClose?: () => void;
};

export const WUIModalHeader: React.FC<WUIModalHeaderProps> = ({
  title,
  closeIcon,
  className,
  titleClassName,
  onBackPress,
  classNameCloseIcon,
  closeIconSize,
  onClose,
}) => {
  const iconSize = closeIconSize || (title ? 24 : 16);

  // Return null if neither title nor closeIcon is provided
  if (!title && !closeIcon) {
    return null;
  }

  return (
    <div className={classNames(styles.header, className)}>
      <div className={classNames(styles.title, titleClassName)}>
        {onBackPress && (
          <ChevronLeftIcon
            className={styles.chevron}
            size={20}
            onClick={onBackPress}
          />
        )}
        {title && <h4>{title}</h4>}
      </div>
      {closeIcon && (
        <CloseIcon
          onClick={onClose}
          className={classNames(classNameCloseIcon || styles.modal_closeIcon)}
          size={iconSize}
        />
      )}
    </div>
  );
};
