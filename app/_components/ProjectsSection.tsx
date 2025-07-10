import { ExpandableCard, ExpandableCardItem, H2, Section } from '@/components';
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
            <ExpandableCardItem
              title='Project: '
              content='Developed a streaming platform for menopause-related educational content, in collaboration with medical experts.'
            ></ExpandableCardItem>
            <ExpandableCardItem title='Role: ' content='Tech Lead'>
              <ul className='list-disc pl-6'>
                <li>Built the project from the ground up.</li>
                <li>
                  Designed and delivered the Minimum Viable Product (MVP).
                </li>
                <li>Mentored a junior developer throughout the process.</li>
              </ul>
            </ExpandableCardItem>
          </>
        }
        expandableContent={
          <>
            <ExpandableCardItem
              title='Key Achievements: '
              content='Key achievements description'
            >
              <ul className='list-disc pl-6'>
                <li>
                  Successfully launched a Minimum Viable Product (MVP) with core
                  functionality.
                </li>
                <li>
                  Implemented video hosting, streaming, and laid the groundwork
                  for authentication and payment processing.
                </li>
                <li>
                  Ensured the architecture was designed for GDPR-compliant
                  handling of sensitive user data.
                </li>
              </ul>
            </ExpandableCardItem>

            <ExpandableCardItem
              title='Learnings & Growth: '
              content='Learnings and growth description'
            >
              <ul className='list-disc  pl-6'>
                <li>
                  Gained invaluable experience in business modeling and startup
                  funding through intensive workshops in the BSS program.
                </li>
                <li>
                  It was a pivotal first experience setting up a tech project
                  from scratch with full confidence and avoiding pitfalls from
                  past projects.
                </li>
              </ul>
            </ExpandableCardItem>
          </>
        }
        techStack={[
          'Next.js',
          'Tailwind CSS',
          'TypeScript',
          'Cloudflare',
          'Convex',
          'Stripe',
        ]}
      />
    </Section>
  );
};
