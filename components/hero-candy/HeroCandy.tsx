import { FCProps, HtmlProps } from '@/types';
import {
  VectorBlue,
  VectorGreen,
  VectorOrange,
  VectorPink,
  VectorPurple,
  VectorYellow,
} from './vectors';

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
      <VectorGreen className='absolute right-0' />
      <VectorPink className='absolute right-0' />
      <VectorPurple className='absolute right-0' />
      <VectorBlue className='absolute right-0 top-20' />
      <VectorYellow className='absolute right-100' />
      <VectorOrange className='absolute right-70' />
    </div>
  );
};
