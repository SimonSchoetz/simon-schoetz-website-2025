import { FCProps } from '@/types';
import {
  ContainerButton,
  ContainerButtonProps,
  DefaultButton,
  DefaultButtonProps,
  HeaderButton,
  HeaderButtonProps,
} from './variants';

type Props = DefaultButtonProps | HeaderButtonProps | ContainerButtonProps;

export const Button: FCProps<Props> = ({
  config,
  className = '',
  ...props
}) => {
  const sharedStyles = 'hover:cursor-pointer';
  const combinedClassName = `${sharedStyles} ${className}`;

  switch (config || 'default') {
    case 'header':
      return (
        <HeaderButton
          {...(props as HeaderButtonProps)}
          className={combinedClassName}
        />
      );
    case 'container':
      return (
        <ContainerButton
          {...(props as ContainerButtonProps)}
          className={combinedClassName}
        />
      );
    default:
      return (
        <DefaultButton
          {...(props as DefaultButtonProps)}
          className={combinedClassName}
        />
      );
  }
};
