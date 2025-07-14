import { Section, H2 } from '@/components';
import { FCProps, HtmlProps } from '@/types';

export const CareerPathsSection: FCProps<HtmlProps<'section'>> = ({
  ...props
}) => {
  return (
    <Section {...props}>
      <H2 text='Career Paths' className='mb-4' />
    </Section>
  );
};
