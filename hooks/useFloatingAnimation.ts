import { CSSProperties, useEffect, useState } from 'react';

export type AnimationConfig = {
  /**
   * seconds
   */
  duration?: number;
  /**
   * rem
   */
  xRange?: number;
  /**
   * rem
   */
  yRange?: number;

  scaleRange?: number;
  /**
   * degrees
   */
  rotationRange?: number;
  /**
   * 0-1
   */
  opacityRange?: number;
  /**
   * ms
   */
  delay?: number;
};

export const useFloatingAnimation = ({
  duration = 0,
  delay = 0,
  xRange = 0,
  yRange = 0,
  scaleRange = 0,
  rotationRange = 0,
  opacityRange = 0,
}: AnimationConfig): CSSProperties => {
  const [isAtMax, setIsAtMax] = useState(false);

  const transitionDuration = duration * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAtMax((prev) => !prev);
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [transitionDuration]);

  const transformMax = `translate(${xRange}rem, ${yRange}rem) scale(${
    1 + scaleRange
  }) rotate(${rotationRange}deg)`;
  const transformDefault = `translate(0rem, 0rem) scale(1) rotate(0deg)`;

  return {
    transform: isAtMax ? transformMax : transformDefault,
    opacity: isAtMax ? 1 - opacityRange : 1,
    transition: `all ${transitionDuration}ms ease-in-out ${delay}ms`,
  } satisfies CSSProperties;
};
