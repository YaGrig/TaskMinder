import React, { forwardRef, LegacyRef } from "react";
import classNames from "classnames";
import styles from "./WUIInput.module.scss";

export enum WUIInputVariant {
  filledGray = "filledGray",
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type OwnProps = {
  variant?: WUIInputVariant;
  className?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
};

export type WUIInputProps = OwnProps & Omit<InputProps, "size">;

export type WUIInputRef = HTMLInputElement;

const WUIInputComponent = forwardRef<WUIInputRef, WUIInputProps>(
  (
    {
      variant = WUIInputVariant.filledGray,
      className,
      label,
      error = false,
      helperText,
      ...otherProps
    },
    ref
  ) => {
    const containerClassName = classNames(
      className,
      styles.wuiInput,
      variant === WUIInputVariant.filledGray && styles.wuiInput__filledGray
    );

    const inputClassName = classNames(
      styles.input,
      error && styles.input__error
    );

    const labelText = label ? `${label}` : "";

    return (
      <div className={containerClassName}>
        <input
          className={inputClassName}
          placeholder={labelText}
          {...otherProps}
          ref={ref as LegacyRef<HTMLInputElement>}
        />
        {helperText && (
          <p
            className={classNames(
              styles.helperText,
              error && styles.helperText__error
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

export const WUIInput = React.memo(WUIInputComponent);

WUIInputComponent.displayName = "WUIInputComponent";
