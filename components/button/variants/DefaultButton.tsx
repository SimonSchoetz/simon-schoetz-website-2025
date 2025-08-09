'use client';

import { Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import { ComponentProps, useState } from 'react';

export type DefaultButtonProps = HtmlProps<'button'> & {
  config: 'default';
  label: string;
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
  colorVar?: string;
};

export const DefaultButton: FCProps<DefaultButtonProps> = ({
  label,
  icon,
  flipIcon,
  className = '',
  colorVar,
  ...props
}) => {
  const baseStyles =
    'relative border uppercase gap-2 py-4 px-8  text-bg text-sm font-bold rounded-2xl overflow-hidden group transition-all duration-600 ease-in-out';
  const [hovered, setHovered] = useState(false);

  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`${baseStyles} ${className} test-hover`}
      style={{
        background: hovered ? 'var(--bg)' : colorVar ?? 'var(--fg)',
        borderColor: colorVar ?? 'var(--fg)',
        color: hovered ? colorVar ?? 'var(--fg)' : 'var(--bg)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <HoverBlob />
      <span className='container-center gap-4 relative z-20'>
        {label}
        {icon && (
          <Icon
            iconName={icon}
            className={`${
              flipIcon ? '' : 'rotate-x-180'
            } transition-transform duration-600`}
          />
        )}
      </span>
    </button>
  );
};

const HoverBlob: FCProps<HtmlProps<'div'>> = ({ ...props }) => {
  const positioning = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const baseStyles =
    'z-10 bg-bg w-full h-auto aspect-square rounded-full absolute transition-all duration-600 ease-in-out';
  const transitionStart = 'scale-0';
  const transitionEnd = 'group-hover:scale-[200%]';
  return (
    <div
      {...props}
      className={`${baseStyles} ${positioning} ${transitionStart} ${transitionEnd}`} // -top-[120%]
    />
  );
};
