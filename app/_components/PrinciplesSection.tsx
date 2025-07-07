import { Section, H2, FlipCard } from '@/components';
import { FCProps, SectionProps } from '@/types';

type Props = SectionProps;

export const PrinciplesSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='Principles' className='mb-4' />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <FlipCard cover='Creativity' content='Creativity Content' />
        <FlipCard cover='Conscience' content='Conscience Content' />
        <FlipCard cover='Purpose' content='Purpose Content' />
      </div>
    </Section>
  );
};
