'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState } from 'react';
import { Button } from './button/Button';
import { Icon } from './Icon';

type Props = HtmlProps<'button'> & {
  cover: string;
  content: string;
};

export const FlipCard: FCProps<Props> = ({
  cover,
  content,
  className,
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const boxStyle: string = 'bg-bg-2 rounded-4xl p-8';

  const sharedStyles = 'backface-hidden transition-all duration-1000 group';

  const sharedIconStyles = 'group-hover:stroke-fg transition-all';

  return (
    <Button
      className={`${className} transform-3d`}
      config='container'
      aria-label='Flip card'
      onClick={handleFlip}
      {...props}
    >
      <div
        className={`${sharedStyles} ${boxStyle} ${
          isFlipped
            ? '[transform:rotate3d(1,-1,0,-180deg)] scale-[10%] text-bg' //todo: add color of respective card to transition
            : ''
        } absolute container-center w-full h-full`}
      >
        <span className='text-5xl font-thunder font-light'>{cover}</span>
        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} absolute bottom-8 right-8 `}
        />
      </div>
      <div
        className={`${sharedStyles} ${boxStyle} ${
          isFlipped
            ? ''
            : '[transform:rotate3d(1,-1,0,180deg)] scale-[10%] text-bg'
        } `}
      >
        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} rotate-180`}
        />
        <p className='pt-8 text-left text-sm lg:text-md'>{content}</p>
      </div>
    </Button>
  );
};
