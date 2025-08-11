'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState } from 'react';
import { Button } from '../button/Button';
import { Icon } from '../Icon';
import {
  CoverTitleArtifacts,
  FrontSideGradient,
  SurfaceShadow,
} from './components';

type Props = HtmlProps<'button'> & {
  cover: string;
  content: string;
  colorVar: string;
};

const flipDuration = 'duration-1000';
const hoverDuration = 'duration-600';

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

  const sharedStyles = `backface-hidden overflow-hidden transition-all ${flipDuration} group`;
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
        <SurfaceShadow
          corner='br'
          isFlipped={isFlipped}
          flipDuration={flipDuration}
        />

        <CoverTitleArtifacts
          cover={cover}
          isHovered={isHovered}
          colorVar={colorVar}
          hoverDuration={hoverDuration}
        />

        <FrontSideGradient
          colorVar={colorVar}
          isHovered={isHovered}
          hoverDuration={hoverDuration}
        />

        <span
          className={`z-10 text-5xl font-thunder font-light transition-all ${hoverDuration}`}
          style={{
            textShadow: `0 ${isHovered ? '-2px' : '0'} 5px ${colorVar}`,
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
        <SurfaceShadow
          corner='tl'
          isFlipped={!isFlipped}
          flipDuration={flipDuration}
        />

        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} rotate-180`}
        />
        <p
          className={`pt-8 text-left text-sm lg:text-md transition-all ${flipDuration}`}
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
