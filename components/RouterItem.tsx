import { FCProps } from '@/types';
import Link, { LinkProps } from 'next/link';

type Props = { label: string; className?: string };

export const RouterItem: FCProps<LinkProps & Props> = ({
  label,
  className,
  ...props
}) => {
  return (
    <Link {...props} className={`${className}`}>
      {label}
    </Link>
  );
};
