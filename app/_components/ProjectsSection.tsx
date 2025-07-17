import { ExpandableCard, ExpandableCardItem, H2, Section } from '@/components';
import { FCProps } from '@/types';

type Props = object;

export const ProjectsSection: FCProps<Props> = ({ ...props }) => {
  return (
    <Section {...props} id='projects' className='px-16'>
      <H2 text='Projects' className='mb-4' />
      <ExpandableCard
        title='Femlives'
        subheading='Co-founder · CTO · Aug 2024 - Jan 2025'
        fixedContent={
          <>
            <ExpandableCardItem
              title='Project: '
              subTitle='Developed a streaming platform for menopause-related educational content in collaboration with medical professionals, funded through the Berlin Startup Stipendium (€100,000).'
            ></ExpandableCardItem>
            <ExpandableCardItem
              title='Role: '
              subTitle='Led all technical aspects of the project from the ground up.'
            >
              <ul className='list-disc pl-6'>
                <li>Designed and delivered the MVP.</li>
                <li>Mentored a junior developer.</li>
                <li>
                  Made key architectural decisions across stack, tooling, and
                  workflows.
                </li>
              </ul>
            </ExpandableCardItem>
          </>
        }
        expandableContent={
          <>
            <ExpandableCardItem title='Key Achievements: '>
              <ul className='list-disc pl-6'>
                <li>
                  Launched a functional MVP with secure user authentication and
                  video streaming.
                </li>
                <li>
                  Laid the foundation for video hosting, payment processing, and
                  GDPR-compliant data handling.
                </li>
                <li>
                  Established best practices for version control, testing, and
                  collaborative development.
                </li>
              </ul>
            </ExpandableCardItem>

            <ExpandableCardItem title='Reflections:'>
              <p>
                This was my first project as a tech lead with full
                ownership—from concept to deployment. It gave me the chance to
                apply my experience with confidence, support a junior’s growth,
                and gain hands-on insight into business modeling and startup
                funding through the BSS program.
              </p>
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
