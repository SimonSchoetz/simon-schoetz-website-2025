import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'div'> & {
  corner: 'tl' | 'br';
  isFlipped: boolean;
  flipDuration: number;
};

export const SurfaceShadow: FCProps<Props> = ({
  corner,
  isFlipped,
  flipDuration,
}) => {
  const angle = corner === 'tl' ? 135 : 315;
  return (
    <div
      className={`z-20 absolute top-0 left-0 w-full h-full transition-all pointer-events-none duration-${flipDuration}`}
      style={{
        background: `linear-gradient(${angle}deg, black, transparent)`,
        opacity: isFlipped ? 1 : 0,
      }}
    />
  );
};
