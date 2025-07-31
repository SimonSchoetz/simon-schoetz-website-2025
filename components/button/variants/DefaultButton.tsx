import { Icon } from '@/components';
import { FCProps, HtmlProps } from '@/types';
import { ComponentProps } from 'react';

export type DefaultButtonProps = HtmlProps<'button'> & {
  config: 'default';
  label: string;
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
};

export const DefaultButton: FCProps<DefaultButtonProps> = ({
  label,
  icon,
  flipIcon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'container-center border uppercase gap-2 py-4 px-8 bg-fg text-bg text-sm font-bold rounded-2xl leading-0';
  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {label}
      {icon && (
        <Icon
          iconName={icon}
          className={`${
            flipIcon ? '' : 'rotate-x-180'
          } transition-transform duration-600 `}
        />
      )}
    </button>
  );
};
