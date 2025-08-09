'use client';

import { H3 } from '@/components/Headings';
import { Icon } from '@/components/Icon';
import { FCProps, HtmlProps } from '@/types';
import { ComponentProps, useState } from 'react';
import { HoverBlob } from '../components';

export type HeaderButtonProps = HtmlProps<'button'> & {
  config: 'header';
  label: string;
  subLabel?: string;
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
  colorVar?: string;
};

export const HeaderButton: FCProps<HeaderButtonProps> = ({
  label,
  subLabel,
  icon,
  flipIcon,
  className = '',
  colorVar,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  const color = hovered ? colorVar ?? 'var(--fg)' : 'var(--bg)';

  const textTransition = 'transition duration-600 ease-in-out';

  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`relative flex justify-between items-center text-bg ${className} group overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <HoverBlob />

      <div className='z-10 flex flex-col items-start md:flex-row md:container-center md:items-center md:gap-8'>
        <div className='relative'>
          <H3
            className={`uppercase text-3xl font-medium leading-none ${textTransition}`}
            text={label}
            style={{ color }}
          />

          <Underline style={{ background: color }} />
        </div>

        {subLabel && (
          <span className={`text-base ${textTransition}`} style={{ color }}>
            {subLabel}
          </span>
        )}
      </div>

      {icon && (
        <Icon
          iconName={icon}
          style={{ color }}
          className={`w-8 h-8 ${
            flipIcon ? '' : 'rotate-x-180'
          } duration-600 group-hover:scale-110`}
        />
      )}
    </button>
  );
};

const Underline: FCProps<HtmlProps<'div'>> = ({ ...props }) => {
  return (
    <div
      {...props}
      className='absolute h-1 w-full bg-bg scale-x-0 origin-left bottom-0.5 group-hover:scale-x-100 transition duration-300 ease-in-out rounded-full'
    />
  );
};
