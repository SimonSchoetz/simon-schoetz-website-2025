'use client';

import { useState } from 'react';
import { FCProps, HtmlProps } from '@/types';
import { Button } from './button/Button';
import { ExpandableDiv } from './ExpandableDiv';

type Props = HtmlProps<'div'> & {
  title: string;
  subTitle: string;
  expandableContent: React.ReactNode;
  contentContainerClassName?: string;
  colorVar?: string;
};

export const ExpandableChip: FCProps<Props> = ({
  title,
  subTitle,
  expandableContent,
  className,
  contentContainerClassName,
  colorVar,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const borderRadius = 'rounded-[2.5rem] lg:rounded-[3.5rem]';

  return (
    <div
      {...props}
      className={`flex flex-col ${borderRadius} border-1 text-bg stroke-bg ${className}`}
      style={{
        background: colorVar,
        borderColor: colorVar,
      }}
    >
      <Button
        config='header'
        label={title}
        subLabel={subTitle}
        onClick={() => setIsExpanded(!isExpanded)}
        icon='upInCircle'
        flipIcon={isExpanded}
        className={`p-6 lg:p-8 ${borderRadius}`}
        colorVar={colorVar}
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
