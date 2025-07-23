'use client';

import { FCProps } from '@/types';
import { useState } from 'react';
import { Button } from './Button';
import { H3 } from './Headings';
import { Chip } from './Chip';
import { ExpandableDiv } from './ExpandableDiv';

type Props = {
  title: string;
  subheading: string;
  fixedContent: React.ReactNode;
  expandableContent: React.ReactNode;
  techStack: string[];
};

export const ExpandableCard: FCProps<Props> = ({
  fixedContent,
  expandableContent,
  title,
  subheading,
  techStack,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div {...props} className='bg-bg-2 rounded-4xl p-8 lg:p-14'>
      <div className='flex flex-col gap-6 lg:flex-row justify-between lg:items-center mb-10'>
        <H3 text={title} />

        <p className='uppercase lg:text-lg'>{subheading}</p>
      </div>

      <div className='flex flex-col gap-10 mb-10 text-sm lg:text-base'>
        {fixedContent}
      </div>

      <ExpandableDiv
        isExpanded={isExpanded}
        className='flex flex-col gap-10 mb-10 text-sm lg:text-base'
      >
        {expandableContent}
      </ExpandableDiv>

      <div className='flex flex-wrap gap-4 mb-10'>
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </div>

      <Button
        className='w-full lg:w-fit'
        config='default'
        label={isExpanded ? 'Show less' : 'Show more'}
        onClick={() => setIsExpanded(!isExpanded)}
        icon='upInCircle'
        flipIcon={isExpanded}
      />
    </div>
  );
};
