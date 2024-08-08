import { useEffect, useMemo, useState } from 'react';

export const useViewport = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (window) {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const result = useMemo(
    () => ({
      width
    }),
    [width]
  );

  return result;
};
