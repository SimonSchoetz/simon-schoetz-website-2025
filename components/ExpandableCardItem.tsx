import { FCProps } from '@/types';
import { PropsWithChildren } from 'react';
import { H4 } from './Headings';

type Props = {
  title: string;
  content?: string;
};

export const ExpandableCardItem: FCProps<PropsWithChildren<Props>> = ({
  title,
  content,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <div>
        <H4 text={title} className='inline' />
        {content && <span>{content}</span>}
      </div>
      {children}
    </div>
  );
};
