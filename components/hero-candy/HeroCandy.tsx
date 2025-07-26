import { FCProps } from '@/types';
import {
  VectorBlue,
  VectorGreen,
  VectorOrange,
  VectorPink,
  VectorPurple,
  VectorYellow,
} from './vectors';

type Props = object;

export const HeroCandy: FCProps<Props> = ({ ...props }) => {
  return (
    <div
      aria-hidden
      className='absolute h-dvh w-dvw content-width top-0 blur-[5rem] overflow-hidden'
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
