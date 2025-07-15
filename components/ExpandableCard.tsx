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
  const [boxHeight, setBoxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = contentRef.current?.scrollHeight;
    setBoxHeight(`${height}px`);
  }, [isExpanded]);

  useEffect(() => {
    const hasExpanded =
      isExpanded && boxHeight !== '0px' && boxHeight !== 'auto';

    if (hasExpanded) {
      setTimeout(() => {
        setBoxHeight('auto');
      }, 400); // animation time + 100ms
    }

    const shouldCollapse =
      !isExpanded && boxHeight !== '0px' && boxHeight !== 'auto';

    if (shouldCollapse) {
      setBoxHeight('0px');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxHeight]);

  return (
    <div {...props} className='bg-bg-2 rounded-4xl p-14'>
      <div className='flex justify-between items-center mb-10'>
        <H3 text={title} />

        <p className='uppercase text-lg'>{subheading}</p>
      </div>

      <div className='flex flex-col gap-10 mb-10'>{fixedContent}</div>

      <div
        ref={contentRef}
        className={`flex flex-col gap-10 overflow-hidden transition-all duration-300 ${
          isExpanded ? `opacity-100 mb-10` : 'opacity-0 mb-0'
        }`}
        style={{
          height: boxHeight,
        }}
        aria-hidden={!isExpanded}
        aria-label='Expandable content'
      >
        {expandableContent}
      </div>

      <div className='flex flex-wrap gap-4 mb-10'>
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </div>

      <Button
        config='default'
        label={isExpanded ? 'Show less' : 'Show more'}
        onClick={() => setIsExpanded(!isExpanded)}
        icon='upInCircle'
        flipIcon={isExpanded}
      />
    </div>
  );
};
