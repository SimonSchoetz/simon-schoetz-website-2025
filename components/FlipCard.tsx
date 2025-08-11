'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState } from 'react';
import { Button } from './button/Button';
import { Icon } from './Icon';

type Props = HtmlProps<'button'> & {
  cover: string;
  content: string;
  colorVar: string;
};

const flipDuration = 1000;
const hoverDuration = 1000;

export const FlipCard: FCProps<Props> = ({
  cover,
  content,
  className = '',
  colorVar,
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const boxStyle: string = 'bg-bg-2 rounded-4xl p-8';

  const sharedStyles = `backface-hidden overflow-hidden transition-all duration-${flipDuration} group`;
  const sharedIconStyles = 'group-hover:stroke-fg transition-all';

  return (
    <Button
      className={`${className} transform-3d overflow-hidden`}
      config='container'
      aria-label='Flip card'
      onClick={handleFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={` ${sharedStyles} ${boxStyle} ${
          isFlipped ? '[transform:rotate3d(1,-1,0,-180deg)] scale-[10%]' : ''
        } absolute container-center w-full h-full`}
      >
        <SurfaceShadow corner='br' isFlipped={isFlipped} />

        <FrontSideGradient colorVar={colorVar} isHovered={isHovered} />

        <CoverTitleArtifacts
          cover={cover}
          isHovered={isHovered}
          colorVar={colorVar}
        />

        <span
          className={`z-10 text-5xl font-thunder font-light transition-all duration-${hoverDuration}`}
          style={{
            textShadow: `0 ${isHovered ? '-5px' : '0'} 10px ${colorVar}`,
            color: isFlipped ? colorVar : 'var(--fg)',
          }}
        >
          {cover}
        </span>

        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} absolute z-10 bottom-8 right-8 `}
        />
      </div>

      <div
        className={`${sharedStyles} ${boxStyle} ${
          isFlipped
            ? ''
            : '[transform:rotate3d(1,-1,0,180deg)] scale-[10%] text-bg'
        } `}
        style={{
          background: 'linear-gradient(to bottom, var(--bg-2), transparent)',
        }}
      >
        <SurfaceShadow corner='tl' isFlipped={!isFlipped} />

        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} rotate-180`}
        />
        <p
          className={`pt-8 text-left text-sm lg:text-md transition-all duration-${flipDuration}`}
          style={{
            color: !isFlipped ? colorVar : 'var(--fg)',
          }}
        >
          {content}
        </p>
      </div>
    </Button>
  );
};

type CoverTitleArtifactsProps = {
  cover: string;
  isHovered: boolean;
  colorVar: string;
};

const CoverTitleArtifacts: FCProps<CoverTitleArtifactsProps> = ({
  cover,
  isHovered,
  colorVar,
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

type FrontSideGradientProps = HtmlProps<'div'> & {
  colorVar: string;
  isHovered: boolean;
};

const FrontSideGradient: FCProps<FrontSideGradientProps> = ({
  colorVar,
  isHovered,
}) => {
  const frontSideGradient = `linear-gradient(to top, ${colorVar}, transparent 60%)`;
  return (
    <div
      className={`z-0 absolute w-full h-full top-1/4 hover:top-0 transition-all duration-${hoverDuration}`}
      style={{
        background: colorVar ? frontSideGradient : '',
        top: isHovered ? '0' : '25%',
      }}
    />
  );
};

type SurfaceShadowProps = HtmlProps<'div'> & {
  corner: 'tl' | 'br';
  isFlipped: boolean;
};

const SurfaceShadow: FCProps<SurfaceShadowProps> = ({ corner, isFlipped }) => {
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
