import { FCProps, HtmlProps } from '@/types';
import { ComponentProps } from 'react';
import { Icon } from './Icon';

type ButtonProps = HtmlProps<'button'> & {
  config: 'defaultButton';
  label: string;
  isLoading?: boolean;
};

type IconProps = HtmlProps<'button'> & {
  config: 'icon';
  iconName: ComponentProps<typeof Icon>['iconName'];
};

type Props = ButtonProps | IconProps;

export const Button: FCProps<Props> = ({
  config = 'defaultButton',
  className = '',
  ...props
}) => {
  const sharedStyles = 'hover:cursor-pointer';

  return (
    <>
      {config === 'defaultButton' && (
        <DefaultButton
          {...(props as ButtonProps)}
          className={`${sharedStyles} ${className}`}
        />
      )}
      {config === 'icon' && (
        <IconButton
          {...(props as IconProps)}
          className={`${sharedStyles} ${className}`}
        />
      )}
    </>
  );
};

const DefaultButton: FCProps<ButtonProps> = ({ label, ...props }) => {
  return (
    <button aria-label={props['aria-label'] ?? label} {...props}>
      {label}
    </button>
  );
};

const IconButton: FCProps<IconProps> = ({ iconName, ...props }) => {
  return (
    <button {...props}>
      <Icon iconName={iconName} />
    </button>
  );
};
