import React, { FC, useMemo } from "react";
import classNames from "classnames";
import { isNil } from "lodash";
import styles from "./WUICircularProgress.module.scss";
import { DoneIcon } from "@/components/WUIIcon";

export enum WUICircularProgressVariant {
  percent = "percent",
  parts = "parts",
}

export enum WUICircularProgressColor {
  primary = "primary",
  inherit = "inherit",
}

export enum WUICircularProgressSize {
  huge = "huge",
  large = "large",
  normal = "normal",
  small = "small",
  tiny = "tiny",
}

export type WUICircularProgressProps = {
  value?: number;
  variant?: WUICircularProgressVariant;
  size?: WUICircularProgressSize;
  partsCount?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: WUICircularProgressColor;
  customSize?: number;
};

type SvgParams = {
  strokeDasharray: number;
  cx: number;
  cy: number;
  r: number;
  viewBox: string;
  strokeWidth: number;
};

const getCircleParams = (size: number, strokeWidth: number): SvgParams => {
  const centerPosition = size / 2;
  const radius = (size - strokeWidth) / 2;
  const strokeDasharray = radius * 2 * Math.PI;

  return {
    viewBox: `0 0 ${size} ${size}`,
    cx: centerPosition,
    cy: centerPosition,
    r: radius,
    strokeDasharray,
    strokeWidth,
  };
};

const circlesParamsByVariant = {
  [WUICircularProgressVariant.parts]: getCircleParams(56, 6),
  [WUICircularProgressVariant.percent]: getCircleParams(40, 6),
};

const renderSvgCircle = (
  variant: WUICircularProgressVariant,
  strokeDashoffset: number = 0,
  isDeterminate: boolean = false
) => {
  const { viewBox, cx, cy, r, strokeDasharray, strokeWidth } =
    circlesParamsByVariant[variant];

  const style = !isDeterminate
    ? { strokeWidth }
    : {
        strokeDasharray,
        strokeWidth,
        strokeDashoffset,
      };

  return (
    <svg className="" viewBox={viewBox}>
      <circle cx={cx} cy={cy} r={r} style={style} />
    </svg>
  );
};

const renderCircle = (
  strokeDashoffset: number,
  variant: WUICircularProgressVariant,
  isDeterminate: boolean
) => {
  return (
    <div
      className={classNames(
        styles.circleContainer,
        !isDeterminate && styles.circleContainer_indeterminate
      )}
    >
      {renderSvgCircle(variant, strokeDashoffset, isDeterminate)}
    </div>
  );
};

const renderCircleBackground = (variant: WUICircularProgressVariant) => (
  <div className={classNames(styles.circleBg)}>
    {renderSvgCircle(variant, 0)}
  </div>
);

export const WUICircularProgress: FC<WUICircularProgressProps> = ({
  value,
  variant = WUICircularProgressVariant.percent,
  partsCount,
  size = WUICircularProgressSize.huge,
  className,
  style,
  color = WUICircularProgressColor.primary,
  customSize,
}) => {
  const isDeterminate = !isNil(value);

  const customStyle = {
    ...style,
  };
  if (customSize) {
    customStyle.height = customSize;
    customStyle.width = customSize;
  }

  const getStrokeCountOfPieces = useMemo(() => {
    let result = 100;
    if (variant === WUICircularProgressVariant.parts) {
      result = partsCount as number;
    }
    return result;
  }, [variant, partsCount]);

  const { strokeDasharray } = circlesParamsByVariant[variant];

  const strokeDashoffset =
    strokeDasharray -
    (strokeDasharray / getStrokeCountOfPieces) * (value as number);
  const strokeDashoffsetToCircle = strokeDashoffset < 0 ? 0 : strokeDashoffset;

  const wrapperClassName = classNames(
    styles.wrapper,
    size === WUICircularProgressSize.large && styles.wrapper_large,
    size === WUICircularProgressSize.normal && styles.wrapper_normal,
    size === WUICircularProgressSize.small && styles.wrapper_small,
    size === WUICircularProgressSize.tiny && styles.wrapper_tiny,
    variant === WUICircularProgressVariant.percent && styles.wrapper_percent,
    color === WUICircularProgressColor.inherit && styles.wrapper_inherit,
    className
  );

  const renderText = () => {
    const textValue = partsCount && value ? partsCount - value : 0;

    return (
      <div className={classNames(styles.text)}>
        {textValue > 0 ? (
          textValue
        ) : (
          <DoneIcon className={classNames(styles.iconDone)} />
        )}
      </div>
    );
  };

  return (
    <div className={wrapperClassName} role="progressbar" style={customStyle}>
      {isDeterminate && renderCircleBackground(variant)}
      {renderCircle(strokeDashoffsetToCircle, variant, isDeterminate)}
      {variant === WUICircularProgressVariant.parts && renderText()}
    </div>
  );
};
