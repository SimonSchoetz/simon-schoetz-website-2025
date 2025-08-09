'use client';

import { Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import { ComponentProps, useState } from 'react';
import { HoverBlob } from '../components';

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
    'relative border border-transparent uppercase gap-2 py-4 px-8  text-bg text-sm font-bold rounded-2xl overflow-hidden group transition-all duration-600 ease-in-out';
  const [hovered, setHovered] = useState(false);

  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`${baseStyles} ${className}`}
      style={{
        background: colorVar ?? 'var(--fg)',
        borderColor: hovered ? colorVar ?? 'var(--fg)' : 'transparent',
        color: hovered ? colorVar ?? 'var(--fg)' : 'var(--bg)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      {...props}
    >
      <HoverBlob hovered={hovered} />

      <span className='container-center gap-4 relative z-20'>
        {label}
        {icon && (
          <Icon
            iconName={icon}
            className={`${
              flipIcon ? '' : 'rotate-x-180'
            } duration-600 group-hover:scale-110`}
          />
        )}
      </span>
    </button>
  );
};
