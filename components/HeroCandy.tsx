import { FCProps } from '@/types';

type Props = object;

export const HeroCandy: FCProps<Props> = ({ ...props }) => {
  return (
    <div className='bg-amber-950 h-dvh content-width absolute top-0' {...props}>
      HeroCandy
    </div>
  );
};
