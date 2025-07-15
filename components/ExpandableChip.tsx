'use client';

import { useState } from 'react';
import { FCProps, HtmlProps } from '@/types';
import { Button } from './Button';
import { ExpandableDiv } from './ExpandableDiv';

type Props = HtmlProps<'div'> & {
  title: string;
  subTitle: string;
  expandableContent: React.ReactNode;
};

export const ExpandableChip: FCProps<Props> = ({
  title,
  subTitle,
  expandableContent,
  className,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      {...props}
      className={`flex flex-col bg-fg rounded-[3.5rem] ${className}`}
    >
      <Button
        config='header'
        label={title}
        subLabel={subTitle}
        onClick={() => setIsExpanded(!isExpanded)}
        icon='upInCircle'
        flipIcon={isExpanded}
        className='p-8 rounded-[3.5rem]'
      />

      <ExpandableDiv isExpanded={isExpanded} className='text-bg px-8'>
        {expandableContent}
      </ExpandableDiv>
    </div>
  );
};
