import { useCallback, useEffect, useState } from 'react';

export const useScreenSizeUpdate: () => number = () => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  const updateScreenSize: () => void = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, [screenSize, updateScreenSize]);

  return screenSize;
};
