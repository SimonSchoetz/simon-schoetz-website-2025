import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'div'> & {
  label: string;
};

export const Chip: FCProps<Props> = ({ label, className = '', ...props }) => {
  return (
    <div
      {...props}
      className={`rounded-full border border-fg-4 py-3 px-2 font-mono text-xs lg:py-4 lg:px-3 lg:text-sm ${className}`}
    >
      {label}
    </div>
  );
};
