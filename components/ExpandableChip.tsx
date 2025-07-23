'use client';

import { useState } from 'react';
import { FCProps, HtmlProps } from '@/types';
import { Button } from './Button';
import { ExpandableDiv } from './ExpandableDiv';

type Props = HtmlProps<'div'> & {
  title: string;
  subTitle: string;
  expandableContent: React.ReactNode;
  contentContainerClassName?: string;
};

export const ExpandableChip: FCProps<Props> = ({
  title,
  subTitle,
  expandableContent,
  className,
  contentContainerClassName,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      {...props}
      className={`flex flex-col rounded-[3.5rem] text-bg stroke-bg bg-fg ${className}`}
    >
      <Button
        config='header'
        label={title}
        subLabel={subTitle}
        onClick={() => setIsExpanded(!isExpanded)}
        icon='upInCircle'
        flipIcon={isExpanded}
        className='p-6 lg:p-8 rounded-[3.5rem]'
      />

      <ExpandableDiv
        isExpanded={isExpanded}
        className={`px-6 lg:px-8 ${contentContainerClassName}`}
      >
        {expandableContent}
      </ExpandableDiv>
    </div>
  );
};
