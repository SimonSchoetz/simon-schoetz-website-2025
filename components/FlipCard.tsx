import { DivProps, FCProps } from '@/types';

type Props = DivProps & {
  cover: string;
  content: string;
};

const boxStyle: DivProps['className'] =
  'w-full h-full bg-bg-2 rounded-4xl content-center';

export const FlipCard: FCProps<Props> = ({ cover, content, ...props }) => {
  return (
    <div {...props} className={`${props.className} relative aspect-square`}>
      <Cover text={cover} />
      <Content text={content} />
    </div>
  );
};

const Cover: FCProps<DivProps & { text: string }> = ({ text, ...props }) => {
  return (
    <div {...props} className={`${boxStyle} ${props.className}`}>
      <p>{text}</p>
      <p>IconButton TBD</p>
    </div>
  );
};

const Content: FCProps<DivProps & { text: string }> = ({ text, ...props }) => {
  return (
    <div {...props} className={`${boxStyle} ${props.className}`}>
      <p>{text}</p>
      <p>IconButton TBD</p>
    </div>
  );
};
