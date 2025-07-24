import { useEffect } from 'react';

export const useThrottledScroll = (
  callback: () => void,
  delay: number = 100
) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        callback();
        timeoutId = null;
      }, delay);
    };

    window.addEventListener('scroll', handleScroll);

    callback();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};
