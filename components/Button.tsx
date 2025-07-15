import { FCProps, HtmlProps } from '@/types';
import { ComponentProps } from 'react';
import { Icon } from './Icon';
import { H3 } from './Headings';

type DefaultButtonProps = HtmlProps<'button'> & {
  config: 'default';
  label: string;
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
};

type IconButtonProps = HtmlProps<'button'> & {
  config: 'icon';
  iconName: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
};

type HeaderButtonProps = HtmlProps<'button'> & {
  config: 'header';
  label: string;
  subLabel?: string;
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>['iconName'];
  flipIcon?: boolean;
};
type ContainerButtonProps = HtmlProps<'button'> & {
  config: 'container';
};

type Props =
  | DefaultButtonProps
  | IconButtonProps
  | HeaderButtonProps
  | ContainerButtonProps;

export const Button: FCProps<Props> = ({
  config = 'default',
  className = '',
  ...props
}) => {
  const sharedStyles = 'hover:cursor-pointer';

  return (
    <>
      {config === 'default' && (
        <DefaultButton
          {...(props as DefaultButtonProps)}
          className={`${sharedStyles} ${className}`}
        />
      )}
      {config === 'icon' && (
        <IconButton
          {...(props as IconButtonProps)}
          className={`${sharedStyles} ${className}`}
        />
      )}
      {config === 'header' && (
        <HeaderButton
          {...(props as HeaderButtonProps)}
          className={`${sharedStyles} ${className}`}
        />
      )}
      {config === 'container' && (
        <ContainerButton
          {...(props as ContainerButtonProps)}
          className={`${sharedStyles} ${className}`}
        />
      )}
    </>
  );
};

const ContainerButton: FCProps<ContainerButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
};

const DefaultButton: FCProps<DefaultButtonProps> = ({
  label,
  icon,
  flipIcon,
  className,
  ...props
}) => {
  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`content-center uppercase gap-2 py-4 px-8 bg-fg text-bg text-sm font-bold rounded-2xl leading-0 ${className}`}
      {...props}
    >
      {label}
      {icon && (
        <Icon
          iconName={icon}
          className={`${
            flipIcon ? '' : 'rotate-x-180'
          } stroke-bg duration-600 `}
        />
      )}
    </button>
  );
};

const IconButton: FCProps<IconButtonProps> = ({
  iconName,
  className,
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

const HeaderButton: FCProps<HeaderButtonProps> = ({
  label,
  subLabel,
  icon,
  flipIcon,
  className,
  ...props
}) => {
  return (
    <button
      aria-label={props['aria-label'] ?? label}
      className={`flex justify-between items-center bg-fg text-bg ${className}`}
      {...props}
    >
      <div className='flex content-center gap-8'>
        <H3 className='uppercase font-medium' text={label} />

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
