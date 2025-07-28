import { CSSProperties, useEffect, useState } from 'react';

export type AnimationConfig = {
  duration: number;
  /**
   * rem
   */
  xRange: number;
  /**
   * rem
   */
  yRange: number;
  scaleRange: number;
  rotationRange?: number;
  opacityRange?: number;
  /**
   * ms
   */
  delay?: number;
};

export const useFloatingAnimation = (
  config: AnimationConfig
): CSSProperties => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const animate = () => {
      const startTime = Date.now() + (config.delay || 0);

      const durationInSecs = config.duration * 1000;

      const updateStyle = () => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % durationInSecs) / durationInSecs;

        // Calculate all animation values
        const x = Math.sin(progress * Math.PI * 2) * config.xRange;
        const y = Math.cos(progress * Math.PI * 2) * config.yRange;
        const scale = 1 + Math.sin(progress * Math.PI * 4) * config.scaleRange;
        const rotation = config.rotationRange
          ? Math.sin(progress * Math.PI * 3) * config.rotationRange
          : 0;
        const opacity = config.opacityRange
          ? 1 + Math.sin(progress * Math.PI * 2) * config.opacityRange
          : 1;

        // Build complete style object
        const newStyle = {
          transform: `translate(${x}rem, ${y}rem) scale(${scale}) rotate(${rotation}deg)`,
          opacity,
          transition: 'transform 0.1s ease-out',
        };

        setStyle(newStyle);
        requestAnimationFrame(updateStyle);
      };

      requestAnimationFrame(updateStyle);
    };

    animate();
  }, [config]);

  return style;
};
