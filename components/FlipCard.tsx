'use client';

import { FCProps, HtmlProps } from '@/types';
import { useState } from 'react';
import { Button } from './Button';

type Props = HtmlProps<'div'> & {
  cover: string;
  content: string;
};

const boxStyle: HtmlProps<'div'>['className'] =
  'w-full h-full bg-bg-2 rounded-4xl p-8';

export const FlipCard: FCProps<Props> = ({
  cover,
  content,
  className = '',
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const sharedStyles =
    'absolute w-full h-full backface-hidden transition-transform duration-1000';

  return (
    <div
      {...props}
      className={`${className} relative aspect-square perspective-distant`}
    >
      <div className='relative w-full h-full transform-3d'>
        <div
          className={`${sharedStyles} ${
            isFlipped ? '[transform:rotate3d(1,-1,0,-180deg)]' : ''
          }`}
        >
          <Cover text={cover} onFlip={handleFlip} />
        </div>
        <div
          className={`${sharedStyles} ${
            isFlipped ? '' : '[transform:rotate3d(1,-1,0,180deg)]'
          }`}
        >
          <Content text={content} onFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
};

const Cover: FCProps<
  HtmlProps<'div'> & { text: string; onFlip: () => void }
> = ({ text, onFlip, className = '', ...props }) => {
  return (
    <div {...props} className={`${boxStyle} ${className} content-center`}>
      <p className='text-5xl'>{text}</p>
      <Button
        config='icon'
        iconName='arrowInCircle'
        className='stroke-fg-2 absolute bottom-8 right-8'
        aria-label='Flip card to view details'
        onClick={onFlip}
      />
    </div>
  );
};

const Content: FCProps<
  HtmlProps<'div'> & { text: string; onFlip: () => void }
> = ({ text, onFlip, className = '', ...props }) => {
  return (
    <div {...props} className={`${boxStyle} ${className} overflow-auto`}>
      <Button
        config='icon'
        iconName='arrowInCircle'
        className='stroke-fg-2 rotate-180'
        aria-label='Flip card to view cover'
        onClick={onFlip}
      />
      <p className='pt-8'>{text}</p>
    </div>
  );
};
