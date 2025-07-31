import { H3 } from '@/components/Headings';
import { Icon } from '@/components/Icon';
import { FCProps, HtmlProps } from '@/types';
import { ComponentProps } from 'react';

export type HeaderButtonProps = HtmlProps<'button'> & {
  config: 'header';
  label: string;
  subLabel?: string;
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
};

export const HeaderButton: FCProps<HeaderButtonProps> = ({
  label,
  subLabel,
  icon,
  flipIcon,
  className = '',
  ...props
}) => {
  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`flex justify-between items-center bg-fg text-bg ${className}`}
      {...props}
    >
      <div className='flex flex-col items-start md:flex-row md:container-center md:items-center md:gap-8'>
        <H3 className='uppercase text-3xl font-medium' text={label} />

        {subLabel && <span className='text-base'>{subLabel}</span>}
      </div>

      {icon && (
        <Icon
          iconName={icon}
          className={`w-8 h-8 ${flipIcon ? '' : 'rotate-x-180'} duration-600`}
        />
      )}
    </button>
  );
};
