'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

type Props = HtmlProps<'button'> & {
  cover: string;
  content: string;
};

const boxStyle: string = 'w-full h-full bg-bg-2 rounded-4xl p-8';

export const FlipCard: FCProps<Props> = ({
  cover,
  content,
  className,
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const sharedStyles =
    'backface-hidden transition-transform duration-1000 group';

  const sharedIconStyles = 'stroke-fg-2 group-hover:stroke-fg transition-all';

  return (
    <Button
      className={`${className} w-full h-full transform-3d`}
      config='container'
      aria-label='Flip card'
      onClick={handleFlip}
      {...props}
    >
      <div
        className={`${sharedStyles} ${boxStyle} ${
          isFlipped ? '[transform:rotate3d(1,-1,0,-180deg)]' : ''
        } absolute content-center`}
      >
        <p className='text-5xl font-thunder font-light'>{cover}</p>
        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} absolute bottom-8 right-8 `}
        />
      </div>
      <div
        className={`${sharedStyles} ${boxStyle} ${
          isFlipped ? '' : '[transform:rotate3d(1,-1,0,180deg)]'
        } `}
      >
        <Icon
          iconName='arrowInCircle'
          className={`${sharedIconStyles} rotate-180`}
        />
        <p className='pt-8 text-left text-sm'>{content}</p>
      </div>
    </Button>
  );
};
