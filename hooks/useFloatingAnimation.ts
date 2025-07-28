import { CSSProperties } from 'react';

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
  const animationId = `float-${id}`;

  // Generate CSS keyframes
  const keyframes = `
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
    `;

  // Inject CSS into document head
  const styleElement = document.createElement('style');
  styleElement.textContent = keyframes;
  document.head.appendChild(styleElement);

  return {
    animation: `${animationId} ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}ms`,
  } satisfies CSSProperties;
};
