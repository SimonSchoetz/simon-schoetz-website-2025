import { FCProps } from '@/types';
import {
  ContainerButton,
  ContainerButtonProps,
  DefaultButton,
  DefaultButtonProps,
  HeaderButton,
  HeaderButtonProps,
  IconButton,
  IconButtonProps,
} from './variants';

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
