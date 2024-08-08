import { Breakpoints } from "@/api/hooks/useBreakpointService";
import { useViewport } from "@/api/hooks/useViewPort";
import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  FC,
  ReactNode,
} from "react";

type UseBreakpointContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isLG: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
};

const BreakpointContext = createContext<UseBreakpointContextType | undefined>(
  undefined
);

interface BreakpointProviderProps {
  children: ReactNode;
}

export const BreakpointProvider: FC<BreakpointProviderProps> = ({
  children,
}) => {
  const { width } = useViewport();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isBreakpoint = useCallback(
    (breakpoint: Breakpoints): boolean => width < breakpoint,
    [width]
  );

  const isMobile = useMemo(() => isBreakpoint(Breakpoints.sm), [isBreakpoint]);

  const isTablet = useMemo(() => isBreakpoint(Breakpoints.md), [isBreakpoint]);
  const isLG = useMemo(() => isBreakpoint(Breakpoints.lg), [isBreakpoint]);

  const value = useMemo(
    () => ({
      isMobile,
      isTablet,
      isLG,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
    }),
    [isMobile, isMobileMenuOpen, isTablet]
  );

  return (
    <BreakpointContext.Provider value={value}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpointContext = (): UseBreakpointContextType => {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error(
      "useBreakpointService must be used within a BreakpointProvider"
    );
  }
  return context;
};
