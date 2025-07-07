import { DivProps, FCProps } from '@/types';
import { Icon } from './Icon';

type Props = DivProps & {
  cover: string;
  content: string;
};

const boxStyle: DivProps['className'] =
  'w-full h-full bg-bg-2 rounded-4xl content-center';

export const FlipCard: FCProps<Props> = ({
  cover,
  content,
  className = '',
  ...props
}) => {
  return (
    <div {...props} className={`${className} relative aspect-square`}>
      <Cover text={cover} />
      <Content text={content} />
    </div>
  );
};

const Cover: FCProps<DivProps & { text: string }> = ({
  text,
  className = '',
  ...props
}) => {
  return (
    <div {...props} className={`${boxStyle} ${className}`}>
      <p>{text}</p>
      <Icon iconName='arrowInCircle' className='stroke-fg-2' />
    </div>
  );
};

const Content: FCProps<DivProps & { text: string }> = ({
  text,
  className = '',
  ...props
}) => {
  return (
    <div {...props} className={`${boxStyle} ${className}`}>
      <Icon iconName='arrowInCircle' className='stroke-fg-2 rotate-180' />
      <p>{text}</p>
    </div>
  );
};
