import { FCProps, HtmlProps } from '@/types';

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
  return (
    <div className='z-10 text-5xl w-full h-full absolute font-thunder font-light'>
      {Array.from({ length: 6 }, (_, index) => {
        const factor = index + 0;
        const translateYFactor = isHovered ? `-${factor * (20 - factor)}px` : 0;
        return (
          <span
            key={index}
            className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-${hoverDuration} w-full text-center`}
            style={{
              color: colorVar,
              transform: `scale(${
                1 - factor * 0.05
              }) translateY(${translateYFactor})`,
              opacity: isHovered ? 1 - factor * 0.15 : 0,
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
