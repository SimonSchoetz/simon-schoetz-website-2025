import { Icon } from '@/components/Icon';
import { FCProps, HtmlProps } from '@/types';
import { ComponentProps } from 'react';

export type IconButtonProps = HtmlProps<'button'> & {
  config: 'icon';
  iconName: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
};

export const IconButton: FCProps<IconButtonProps> = ({
  iconName,
  className = '',
  flipIcon,
  ...props
}) => {
  return (
    <button {...props}>
      <Icon
        iconName={iconName}
        className={`${flipIcon ? '' : 'rotate-180'} duration-600  ${className}`}
      />
    </button>
  );
};
