import { FCProps } from '@/types';
import { PropsWithChildren } from 'react';
import { H4 } from './Headings';

type Props = {
  title: string;
  subTitle?: string;
};

export const ExpandableCardItem: FCProps<PropsWithChildren<Props>> = ({
  title,
  subTitle,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <div>
        <H4 text={title} className='inline font-bold' font='font-mono' />

        {subTitle && <span>{subTitle}</span>}
      </div>
      {children}
    </div>
  );
};
