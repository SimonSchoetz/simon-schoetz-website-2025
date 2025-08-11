import { FCProps, HtmlProps } from '@/types';
import { useState, useRef, useEffect } from 'react';

type Props = HtmlProps<'div'> & {
  cover: string;
  isHovered: boolean;
  colorVar: string;
  hoverDuration: string;
};

export const CoverTitleArtifacts: FCProps<Props> = ({
  cover,
  isHovered,
  colorVar,
  hoverDuration,
  className = '',
}) => {
  const [mousePosition, setMousePosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && isHovered) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 10);
        setMousePosition(x);
      }
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      setMousePosition(0);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      aria-hidden='true'
      ref={containerRef}
      className={`z-10 text-5xl w-full h-full absolute font-thunder font-light ${className}`}
    >
      {Array.from({ length: 2 }, (_, index) => {
        const factor = index + 0;

        const cursorOffsetX = isHovered ? -mousePosition * factor * 15 : 0;

        const transitionBehavior = isHovered
          ? 'transition-opacity'
          : 'transition-all';

        return (
          <span
            key={index}
            className={`absolute left-0 top-1/2 -translate-y-1/2 ${transitionBehavior} ${hoverDuration} w-full text-center`}
            style={{
              color: colorVar,
              transform: `scale(${1 + factor * 11}) translate(${
                cursorOffsetX / factor
              }px )`,
              opacity: isHovered ? 1 - factor * 0.4 : 0,
              // filter: `blur(${factor * (factor / 2)}px)`,
              zIndex: -factor,
            }}
          >
            {cover}
          </span>
        );
      })}
    </div>
  );
};
