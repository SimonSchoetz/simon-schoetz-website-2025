import { DivProps, FCProps } from '@/types';

type Props = DivProps & {
  front: React.ReactNode;
  back: React.ReactNode;
};

export const FlipCard: FCProps<Props> = ({ front, back, ...props }) => {
  return (
    <div {...props} className={`${props.className} relative`}>
      <div className=''>{front}</div>
      <div className=''>{back}</div>
    </div>
  );
};
