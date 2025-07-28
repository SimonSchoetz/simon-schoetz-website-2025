'use client';

import { FCProps, HtmlProps } from '@/types';
import { VectorPink, VectorPurple } from './vectors';
import { AnimationConfig } from '@/hooks';

const duration = 10;

const pinkConfig: AnimationConfig = {
  id: 'footer-pink',
  duration,
  scaleRange: 3,
  yRange: -10,
  opacityRange: 0.2,
};

const purpleConfig: AnimationConfig = {
  id: 'footer-purple',
  duration: duration * 2,
  scaleRange: 3,
  yRange: -10,
  opacityRange: 0.3,
  rotationRange: 10,
};

export const FooterCandy: FCProps<HtmlProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      aria-hidden='true'
      className={`absolute -z-10 h-dvh w-dvw content-width bottom-0 blur-[5rem] overflow-hidden ${className}`}
      {...props}
    >
      <VectorPink
        className='absolute bottom-0 left-0 max-md:scale-75 max-md:bottom-[-1rem] max-md:left-[-15rem]'
        animationConfig={pinkConfig}
      />
      <VectorPurple
        className='absolute bottom-0 right-0  max-md:scale-75 max-md:bottom-[-1rem] max-md:left-[-20rem]'
        animationConfig={purpleConfig}
      />
    </div>
  );
};
