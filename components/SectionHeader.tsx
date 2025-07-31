import { FCProps, HtmlProps } from '@/types';
import { H2, H3 } from './Headings';

type Props = HtmlProps<'div'> & {
  heading: string;
  subheading: string;
};

export const SectionHeader: FCProps<Props> = ({
  heading,
  subheading,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`flex justify-between mb-10 max-lg:flex-col ${className}`}
      {...props}
    >
      <H2 text={heading} />
      <H3
        text={subheading}
        className='!font-mono text-sm max-w-full lg:max-w-64 lg:text-lg'
      />
    </div>
  );
};
