import { ExpandableCard, H2, H4, Section } from '@/components';
import { FCProps } from '@/types';

type Props = object;

export const ProjectsSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props}>
      <H2 text='Projects' className='mb-4' />
      <ExpandableCard
        title='Femlives'
        subheading='Co-founder · CTO · 2024'
        fixedContent={
          <>
            <div>
              <H4 text='Project:' />
              <p>Project description</p>
            </div>
            <div>
              <H4 text='Role:' />
              <p>Role description</p>
            </div>
          </>
        }
        expandableContent={
          <>
            <div>
              <H4 text='Key Achievements:' />
              <p>Key achievements description</p>
            </div>

            <div>
              <H4 text='Learnings & Growth:' />
              <p>Learnings and growth description</p>
            </div>
          </>
        }
        techStack={['React', 'Next.js', 'Tailwind CSS', 'TypeScript']}
      />
    </Section>
  );
};
