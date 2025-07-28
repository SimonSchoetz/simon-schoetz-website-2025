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

const duration = 20;

const pinkConfig: AnimationConfig = {
  duration,
  xRange: 3,
  yRange: 1,
  scaleRange: 0.2,
  delay: 0,
};

const blueConfig: AnimationConfig = {
  duration,
  xRange: 0,
  yRange: 10,
  scaleRange: 1,
  delay: 0,
};

const purpleConfig: AnimationConfig = {
  duration,
  xRange: 22,
  yRange: 10,
  scaleRange: 1.5,
  delay: 0,
};

const greenConfig: AnimationConfig = {
  duration,
  xRange: 15,
  yRange: 0.1,
  scaleRange: 0.2,
  delay: 1000,
  opacityRange: 0.9,
};

const yellowConfig: AnimationConfig = {
  duration: duration * 2,
  xRange: 0,
  yRange: 0,
  scaleRange: 1.5,
  delay: 1000,
};

const orangeConfig: AnimationConfig = {
  duration: duration * 2,
  xRange: -25,
  yRange: 3,
  scaleRange: 1,
  delay: 1200,
};

export const HeroCandy: FCProps<HtmlProps<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      aria-hidden='true'
      className={`absolute h-dvh w-dvw content-width top-0 blur-[5rem] overflow-hidden ${className}`}
      {...props}
    >
      <VectorOrange
        className='absolute right-70'
        animationConfig={orangeConfig}
      />
      <VectorYellow
        className='absolute right-100'
        animationConfig={yellowConfig}
      />
      <VectorGreen
        className='absolute right-200'
        animationConfig={greenConfig}
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
