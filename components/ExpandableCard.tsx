'use client';

import { FCProps } from '@/types';
import { useState } from 'react';
import { Button } from './Button';
import { H3 } from './Headings';

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

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div {...props}>
      <div>
        <H3 text={title} />
        <p>{subheading}</p>
      </div>

      {fixedContent}

      {isExpanded && <div>{expandableContent}</div>}

      <Button
        config='defaultButton'
        label={isExpanded ? 'Show less' : 'Show more'}
        onClick={handleToggle}
      />

      <div className='flex flex-wrap gap-2'>
        {techStack.map((tech) => (
          <div key={tech}>{tech}</div>
        ))}
      </div>
    </div>
  );
};
