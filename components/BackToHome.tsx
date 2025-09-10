import { FCProps, HtmlProps } from '@/types';
import { Icon } from './Icon';
import Link from 'next/link';

export const BackToHome: FCProps<HtmlProps<'a'>> = ({
  href,
  className,
  ...props
}) => {
  return (
    <Link
      href={href ?? '/'}
      className={`flex items-center gap-2 group my-4 text-xs ${className}`}
      {...props}
    >
      <Icon iconName='navArrow' className='rotate-180' />
      <span className='group-hover:underline'>Simon Schötz</span>
    </Link>
  );
};
