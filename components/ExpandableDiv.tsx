'use client';

import { FCProps, HtmlProps } from '@/types';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type Props = HtmlProps<'div'> & {
  isExpanded: boolean;
  triggerToggle: () => void;
};

export const ExpandableDiv: FCProps<PropsWithChildren<Props>> = ({
  isExpanded,
  children,
  className,
  ...props
}) => {
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
    <div
      ref={contentRef}
      className={`overflow-hidden transition-all duration-300 ${className} ${
        isExpanded ? `opacity-100 mb-10` : 'opacity-0 mb-0'
      }`}
      style={{
        height: boxHeight,
      }}
      aria-hidden={!isExpanded}
      aria-label='Expandable content'
      {...props}
    >
      {children}
    </div>
  );
};
