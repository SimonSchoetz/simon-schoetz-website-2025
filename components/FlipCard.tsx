'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

type Props = HtmlProps<'div'> & {
  cover: string;
  content: string;
};

const boxStyle: string = 'w-full h-full bg-bg-2 rounded-4xl p-8';

export const FlipCard: FCProps<Props> = ({
  cover,
  content,
  className = '',
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const sharedStyles =
    'absolute w-full h-full backface-hidden transition-transform duration-1000 group';

  const sharedIconStyles =
    'stroke-fg-2 group-hover:stroke-fg transition-all group-hover:scale-200 duration-2500';

  return (
    <div
      {...props}
      className={`${className} relative aspect-square perspective-distant`}
    >
      <div className='relative w-full h-full transform-3d'>
        <Button
          config='container'
          className={`${sharedStyles} ${boxStyle} ${
            isFlipped ? '[transform:rotate3d(1,-1,0,-180deg)]' : ''
          }`}
          aria-label='Flip card to view content'
          onClick={handleFlip}
        >
          <p className='text-5xl font-thunder font-light'>{cover}</p>
          <Icon
            iconName='arrowInCircle'
            className={`${sharedIconStyles} absolute bottom-8 right-8 `}
          />
        </Button>

        <Button
          config='container'
          className={`${sharedStyles} ${boxStyle} ${
            isFlipped ? '' : '[transform:rotate3d(1,-1,0,180deg)]'
          } overflow-auto`}
          aria-label='Flip card to view cover'
          onClick={handleFlip}
        >
          <Icon
            iconName='arrowInCircle'
            className={`${sharedIconStyles} rotate-180`}
          />
          <p className='pt-8 text-sm'>{content}</p>
        </Button>
      </div>
    </div>
  );
};
