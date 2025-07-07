import { FCProps, HtmlProps } from '@/types';
import { Button } from './Button';

type Props = HtmlProps<'div'> & {
  cover: string;
  content: string;
};

const boxStyle: HtmlProps<'div'>['className'] =
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

const Cover: FCProps<HtmlProps<'div'> & { text: string }> = ({
  text,
  className = '',
  ...props
}) => {
  return (
    <div {...props} className={`${boxStyle} ${className}`}>
      <p>{text}</p>
      <Button
        config='icon'
        iconName='arrowInCircle'
        className='stroke-fg-2'
        aria-label='Flip card to view details'
      />
    </div>
  );
};

const Content: FCProps<HtmlProps<'div'> & { text: string }> = ({
  text,
  className = '',
  ...props
}) => {
  return (
    <div {...props} className={`${boxStyle} ${className}`}>
      <Button
        config='icon'
        iconName='arrowInCircle'
        className='stroke-fg-2 rotate-180'
        aria-label='Flip card to view cover'
      />
      <p>{text}</p>
    </div>
  );
};
