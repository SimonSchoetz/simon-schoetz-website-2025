import { HtmlProps } from '@/types';
import { Button } from './Button';
import { forwardRef } from 'react';

const sharedStyles =
  'block h-[2px] bg-fg transition-all duration-200 group-hover:w-[18px]';

export const BurgerMenuButton = forwardRef<
  HTMLButtonElement,
  HtmlProps<'button'>
>(({ className = '', ...props }, ref) => {
  return (
    <Button
      ref={ref}
      config='container'
      className={`group flex flex-col w-8 h-8 space-y-1 justify-center items-end ${className}`}
      aria-label='Open menu'
      {...props}
    >
      <span className={`${sharedStyles} w-[18px]`} />
      <span className={`${sharedStyles} w-[13.5px]`} />
      <span className={`${sharedStyles} w-[9px]`} />
    </Button>
  );
});

BurgerMenuButton.displayName = 'BurgerMenuButton';
