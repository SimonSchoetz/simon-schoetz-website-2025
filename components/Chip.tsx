import { FCProps } from '@/types';

type Props = {
  label: string;
};

export const Chip: FCProps<Props> = ({ label, ...props }) => {
  return (
    <div
      {...props}
      className='bg-bg-2 rounded-full border border-fg-4 py-4 px-3 text-xs font-mono'
    >
      {label}
    </div>
  );
};
