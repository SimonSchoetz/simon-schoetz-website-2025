import { FCProps, HtmlProps } from '@/types';
import { Button } from './Button';

export const BurgerMenuButton: FCProps<HtmlProps<'button'>> = ({
  className,
  ...props
}) => {
  const sharedStyles =
    'block h-[2px] bg-fg transition-all duration-200 group-hover:w-[18px]';

  return (
    <Button
      config='container'
      className={`group flex flex-col w-8 h-8 justify-center items-end ${className}`}
      aria-label='Open menu'
      {...props}
    >
      <span className={`${sharedStyles} w-[18px]`} />
      <span className={`${sharedStyles} w-[13.5px] my-1`} />
      <span className={`${sharedStyles} w-[9px]`} />
    </Button>
  );
};
