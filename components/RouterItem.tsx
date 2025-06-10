import { FCProps } from '@/types';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & { label: string; className?: string };

export const RouterItem: FCProps<Props> = ({ label, className, ...props }) => {
  return (
    <Link {...props} className={`${className}`}>
      {label}
    </Link>
  );
};
