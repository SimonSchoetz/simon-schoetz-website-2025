'use client';

import { AnimationConfig } from '@/hooks';
import { FCProps, HtmlProps } from '@/types';
import {
  VectorBlue,
  VectorGreen,
  VectorOrange,
  VectorPink,
  VectorPurple,
  VectorYellow,
} from './vectors';

const duration = 3;

const pinkConfig: AnimationConfig = {
  duration,
  xRange: 3,
  yRange: 1,
  scaleRange: 0.5,
  opacityRange: 0.5,
};

const blueConfig: AnimationConfig = {
  duration,
  xRange: 0,
  yRange: 2,
  scaleRange: 0.8,
  rotationRange: -180,
};

const purpleConfig: AnimationConfig = {
  duration: duration * 2,
  xRange: 22,
  yRange: 5,
  scaleRange: 0.5,
  rotationRange: 180,
};

const greenConfig: AnimationConfig = {
  duration: duration * 3,
  xRange: 50,
  yRange: 1,
  scaleRange: 0.2,
  delay: 1000,
  opacityRange: 0.1,
};

const yellowConfig: AnimationConfig = {
  duration: duration * 2,
  // opacityRange: 0.5,
  scaleRange: 1.5,
  delay: 1000,
};

const orangeConfig: AnimationConfig = {
  duration: duration * 2,
  xRange: -25,
  opacityRange: 0.5,
  yRange: 3,
  scaleRange: 1,
  delay: 1200,
  rotationRange: 400,
};

export const HeroCandy: FCProps<HtmlProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      aria-hidden='true'
      className={`absolute -z-10 h-dvh w-dvw content-width top-0 blur-[5rem] overflow-hidden ${className}`}
      {...props}
    >
      <VectorGreen
        className='absolute right-200'
        animationConfig={greenConfig}
      />
      <VectorOrange
        className='absolute right-70'
        animationConfig={orangeConfig}
      />
      <VectorYellow
        className='absolute right-100'
        animationConfig={yellowConfig}
      />
      <VectorPurple
        className='absolute right-0'
        animationConfig={purpleConfig}
      />
      <VectorBlue
        className='absolute right-0 top-20'
        animationConfig={blueConfig}
      />
      <VectorPink className='absolute right-0' animationConfig={pinkConfig} />
    </div>
  );
};
