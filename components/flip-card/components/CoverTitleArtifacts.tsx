import { FCProps, HtmlProps } from '@/types';
import { useState, useRef, useEffect } from 'react';

type Props = HtmlProps<'div'> & {
  cover: string;
  isHovered: boolean;
  colorVar: string;
  hoverDuration: number;
};

export const CoverTitleArtifacts: FCProps<Props> = ({
  cover,
  isHovered,
  colorVar,
  hoverDuration,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && isHovered) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 5);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 5);
        setMousePosition({ x, y });
      }
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      setMousePosition({ x: 0, y: 0 });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className='z-10 text-5xl w-full h-full absolute font-thunder font-light'
    >
      {Array.from({ length: 7 }, (_, index) => {
        const factor = index + 0;
        const baseTranslateY = isHovered
          ? `-${factor * (20 - factor * 0.8)}px`
          : 0;
        const cursorOffsetX = isHovered ? -mousePosition.x * factor * 15 : 0;
        const cursorOffsetY = isHovered ? -mousePosition.y * factor * 15 : 0;

        const biggerOffset =
          Math.abs(cursorOffsetX) > Math.abs(cursorOffsetY)
            ? Math.abs(cursorOffsetX)
            : Math.abs(cursorOffsetY);

        const transitionBehavior = isHovered
          ? 'transition-opacity'
          : 'transition-all';

        return (
          <span
            key={index}
            className={`absolute left-0 top-1/2 -translate-y-1/2 ${transitionBehavior} duration-${hoverDuration} w-full text-center`}
            style={{
              color: colorVar,
              transform: `scale(${
                1 - factor * (0.05 + biggerOffset * 0.0005)
              }) translateY(${baseTranslateY}) translate(${cursorOffsetX}px, ${cursorOffsetY}px)`,
              opacity: isHovered ? 1 - factor * 0.1 : 0,
              filter: `blur(${factor * 0.5}px)`,
            }}
          >
            {cover}
          </span>
        );
      })}
    </div>
  );
};
