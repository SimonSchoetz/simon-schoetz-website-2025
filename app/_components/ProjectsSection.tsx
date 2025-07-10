import { ExpandableCard, H2, Section } from '@/components';
import { FCProps } from '@/types';

type Props = object;

export const ProjectsSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='Projects' className='mb-4' />
      <ExpandableCard />
    </Section>
  );
};
