'use client';

import { FCProps } from '@/types';
import { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { H3 } from './Headings';
import { Chip } from './Chip';

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
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expandableContent]);

  return (
    <div {...props} className='bg-bg-2 rounded-4xl p-14'>
      <div className='flex justify-between mb-10'>
        <H3 text={title} />

        <p className='uppercase'>{subheading}</p>
      </div>

      <div className='flex flex-col gap-10 mb-10'>{fixedContent}</div>

      <div
        ref={contentRef}
        className={`flex flex-col gap-10 overflow-hidden transition-all duration-300 ${
          isExpanded ? `opacity-100 mb-10` : 'opacity-0 mb-0'
        }`}
        style={{
          height: isExpanded ? `${contentHeight}px` : '0px',
        }}
      >
        {expandableContent}
      </div>

      <div className='flex flex-wrap gap-4 mb-10'>
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </div>

      <Button
        config='defaultButton'
        label={isExpanded ? 'Show less' : 'Show more'}
        onClick={handleToggle}
      />
    </div>
  );
};
