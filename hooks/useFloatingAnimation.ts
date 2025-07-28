'use client';

import { CSSProperties, useEffect, useMemo } from 'react';

export type AnimationConfig = {
  /**
   * id
   */
  id: string;
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
  id,
  duration = 4,
  delay = 0,
  xRange = 0,
  yRange = 0,
  scaleRange = 0,
  rotationRange = 0,
  opacityRange = 0,
}: AnimationConfig): CSSProperties => {
  const animationId = useMemo(() => `float-${id}`, [id]);

  const keyframes = useMemo(
    () => `
    @keyframes ${animationId} {
      0%, 100% {
        transform: translate(0rem, 0rem) scale(1) rotate(0deg);
        opacity: 1;
      }
      50% {
        transform: translate(${xRange}rem, ${yRange}rem) scale(${
      1 + scaleRange
    }) rotate(${rotationRange}deg);
        opacity: ${1 - opacityRange};
      }
    }
  `,
    [animationId, xRange, yRange, scaleRange, rotationRange, opacityRange]
  );

  useEffect(() => {
    const existingStyle = document.getElementById(animationId);
    if (existingStyle) return;

    const styleElement = document.createElement('style');
    styleElement.id = animationId;
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    return () => {
      const element = document.getElementById(animationId);
      if (element) {
        element.remove();
      }
    };
  }, [animationId, keyframes]);

  return {
    animation: `${animationId} ${duration}s ease-in-out infinite ${delay}ms`,
  } satisfies CSSProperties;
};
