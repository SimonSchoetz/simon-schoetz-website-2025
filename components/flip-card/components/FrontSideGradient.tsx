import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'div'> & {
  colorVar: string;
  isHovered: boolean;
  hoverDuration: string;
};

export const FrontSideGradient: FCProps<Props> = ({
  colorVar,
  isHovered,
  hoverDuration,
}) => {
  const frontSideGradient = `linear-gradient(to top, ${colorVar}, transparent 60%)`;
  return (
    <div
      className={`z-0 absolute w-full h-full top-1/4 hover:top-0 transition-all ${hoverDuration}`}
      style={{
        background: colorVar ? frontSideGradient : '',
        top: isHovered ? '0' : '25%',
      }}
    />
  );
};
