import { Section, H2, FlipCard } from '@/components';
import { FCProps, SectionProps } from '@/types';

type Props = SectionProps;

export const PrinciplesSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='Principles' className='mb-4' />

      <FlipCard
        front={<div>Creativity Front</div>}
        back={<div>Creativity Back</div>}
      />
      <FlipCard
        front={<div>Conscience Front</div>}
        back={<div>Conscience Back</div>}
      />
      <FlipCard
        front={<div>Purpose Front</div>}
        back={<div>Purpose Back</div>}
      />
    </Section>
  );
};
