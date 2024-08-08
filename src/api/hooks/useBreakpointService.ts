import { $enum } from "ts-enum-util";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../../../styles/_var.module.scss";
import { useViewport } from "./useViewPort";

export enum Breakpoints {
  xxs = 320,
  xs = 480,
  s = 640,
  sm = 768,
  md = 1024,
  lg = 1280,
  xl = 1440,
  xxl = 1600,
  xxxl = 1920,
}

export type UseBreakpointType = {
  getCurrentBreakpoint: () => Breakpoints;
  isBreakpoint: (breakpoint: Breakpoints) => boolean;
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
};

export const useBreakpointService = (): UseBreakpointType => {
  const { width } = useViewport();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getCurrentBreakpoint = useCallback((): Breakpoints => {
    let currentBreakpoint: Breakpoints = Breakpoints.xxs;
    const breakpointValues = $enum(Breakpoints).getValues();

    for (let i = 0; i < breakpointValues.length; i++) {
      const breakpoint = breakpointValues[i];

      if (breakpoint <= width) {
        currentBreakpoint = breakpoint;
      }
    }
    return currentBreakpoint;
  }, [width]);

  const isBreakpoint = useCallback(
    (breakpoint: Breakpoints): boolean => {
      return width < breakpoint;
    },
    [width]
  );
  const isMobile = useMemo(() => isBreakpoint(Breakpoints.sm), [isBreakpoint]);

  return useMemo(
    () => ({
      getCurrentBreakpoint,
      isBreakpoint,
      isMobile,
      setIsMobileMenuOpen,
      isMobileMenuOpen,
    }),
    [
      getCurrentBreakpoint,
      isBreakpoint,
      isMobile,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
    ]
  );
};
