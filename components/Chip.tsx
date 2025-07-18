import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'div'> & {
  label: string;
};

export const Chip: FCProps<Props> = ({ label, className, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-bg-2 rounded-full border border-fg-4 py-4 px-3 text-sm font-mono ${className}`}
    >
      {label}
    </div>
  );
};
