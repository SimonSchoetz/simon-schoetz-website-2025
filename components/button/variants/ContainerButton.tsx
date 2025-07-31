import { FCProps, HtmlProps } from '@/types';

export type ContainerButtonProps = HtmlProps<'button'> & {
  config: 'container';
};

export const ContainerButton: FCProps<ContainerButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
};
