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
      className={`relative flex justify-between items-center border text-bg ${className} group overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        borderColor: colorVar,
        color,
      }}
      {...props}
    >
      <HoverBlob hovered={hovered} />

      <div className='z-10 flex flex-col items-start md:flex-row md:container-center md:items-center md:gap-8'>
        <div className='relative'>
          <H3
            className={`uppercase text-left text-3xl font-medium leading-none ${textTransition}`}
            text={label}
          />

          <Underline hovered={hovered} style={{ background: color }} />
        </div>

        {subLabel && (
          <span className={`text-base text-left ${textTransition}`}>
            {subLabel}
          </span>
        )}
      </div>

      {icon && (
        <Icon
          iconName={icon}
          className={`w-8 h-8 shrink-0 ml-2 ${
            flipIcon ? '' : 'rotate-x-180'
          } duration-600 group-hover:scale-110`}
        />
      )}
    </button>
  );
};

const Underline: FCProps<HtmlProps<'div'> & { hovered: boolean }> = ({
  hovered,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`absolute h-1 w-full bg-bg scale-x-0 origin-left bottom-0.5 transition duration-300 ease-in-out rounded-full ${
        hovered ? 'scale-x-100' : 'scale-x-0'
      }`}
    />
  );
};
