import {
  CardContent,
  ExpandableCard,
  ExpandableCardItem,
  Section,
  SectionHeader,
} from '@/components';
import { FCProps, HtmlProps } from '@/types';

export const ProjectsSection: FCProps<HtmlProps<'section'>> = ({
  ...props
}) => {
  return (
    <Section id='projects' className='section-padding' {...props}>
      <SectionHeader heading='Projects' subheading='Project Highlights' />
      <ul className='flex flex-col gap-8 lg:gap-10'>
        {cardsContent.map((card, i) => (
          <li key={card.title}>
            <ExpandableCard
              title={card.title}
              subheading={card.subheading}
              fixedContent={card.fixedContent}
              expandableContent={card.expandableContent}
              chips={card.chips}
              colorVar={`var(--project-${i + 1})`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

const cardsContent: CardContent[] = [
  {
    title: 'Femlives',
    subheading: 'Co-founder · CTO · Aug 2024 - Jan 2025',
    fixedContent: (
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
    ),
    expandableContent: (
      <>
        <ExpandableCardItem title='Key Achievements:'>
          <ul className='list-disc pl-6'>
            <li>
              Launched a functional MVP with secure video hosting and streaming.
            </li>
            <li>
              Laid the foundation for user authentication, payment processing,
              and GDPR-compliant data handling.
            </li>
            <li>
              Established best practices for version control, testing, and
              collaborative development.
            </li>
          </ul>
        </ExpandableCardItem>

        <ExpandableCardItem title='Reflections:'>
          <p>
            This was my first project as a tech lead with full ownership from
            concept to deployment. It gave me the chance to apply my experience
            with confidence, support a junior&apos;s growth, and gain hands-on
            insight into business modeling and startup funding through the BSS
            program.
          </p>
        </ExpandableCardItem>
      </>
    ),
    chips: [
      'Product Owner',
      'Tech Lead',
      'Full-Stack Development',
      'R&D',
      'Mentoring',
      'Agile',
    ],
  },
  {
    title: 'Ride',
    subheading: 'Frontend Developer · June 2022 - July 2024',
    fixedContent: (
      <>
        <ExpandableCardItem
          title='Project: '
          subTitle="Digital H's white-label ticketing and ID solution, used by universities and later public transportation providers, serving over 100,000 users across multiple organizations."
        ></ExpandableCardItem>
        <ExpandableCardItem
          title='Role: '
          subTitle='Frontend developer for an in-house product in an agile microservices environment, shaping consumer-facing flows and dashboards from the ground up.
'
        >
          <ul className='list-disc pl-6'>
            <li>
              Built and maintained a reusable component library adaptable for
              multiple client brands and platforms
            </li>
            <li>
              Collaborated closely with backend teams to integrate APIs and
              optimize performance and reliability.
            </li>
            <li>
              Member of a specialist unit trusted to investigate, resolve, and
              document complex, irregular issues across the entire ecosystem,
              leveraging a deep understanding of the full codebase beyond my
              primary area of expertise.
            </li>
            <li>
              Introduced and established Scrum methodologies within the
              development team as it grew, facilitating alignment, focus, and
              continuous improvement.
            </li>
          </ul>
        </ExpandableCardItem>
      </>
    ),
    expandableContent: (
      <>
        <ExpandableCardItem title='Key Achievements:'>
          <ul className='list-disc pl-6'>
            <li>
              Contributed to the successful pivot from digital IDs to a fully
              functional public transport ticketing platform.
            </li>
            <li>
              Reduced redundant code by 80% through creating and maintaining a
              shared frontend component library.
            </li>
            <li>
              Improved onboarding speed for new customers, cutting setup time by
              95%.
            </li>
          </ul>
        </ExpandableCardItem>

        <ExpandableCardItem title='Reflections:'>
          <p>
            Ride&apos;s growth to over 100,000 users by the time I left gave me
            a front-row seat to how rapid scaling transforms both a product and
            the team behind it. As technical depth and complexity outgrew the
            capacity of any single developer to know every detail, we adapted by
            splitting into specialized areas and finding new ways to collaborate
            on the bigger picture. Alongside my development work, I introduced
            and established Scrum practices as the team expanded, helping us
            stay aligned and focused through the challenges of scaling. I am
            proud of the improvements I contributed, from refining user flows to
            strengthening system reliability, and of the trust I earned to take
            on the most complex and irregular challenges.
          </p>
        </ExpandableCardItem>
      </>
    ),
    chips: [
      'Angular',
      'RxJS',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
      'Docker',
      'Git',
      'Microservices',
      'Jira',
      'Scrum Master',
      'Agile Leadership',
      'Crossfunctional Collaboration',
    ],
  },
  {
    title: 'Fabucar',
    subheading: 'Full-stack Developer · Jan 2021 - June 2022',
    fixedContent: (
      <>
        <ExpandableCardItem
          title='Project: '
          subTitle='Fabucar, a large-scale automotive Q&A platform with mobile app, web version, and moderator dashboard, owned by an external client and maintained by Digital H as a long-term agency project.'
        ></ExpandableCardItem>
        <ExpandableCardItem
          title='Role: '
          subTitle='Frontend developer contributing across multiple platforms in a mixed technology stack (React Native, Angular, and legacy PHP-based tools).'
        >
          <ul className='list-disc pl-6'>
            <li>
              Initially focused on the React Native mobile app before expanding
              into the web platform and backend integrations.
            </li>
            <li>
              Worked closely with the client’s in-house developers to align
              feature development and resolve issues.
            </li>
            <li>
              Led ongoing refactoring efforts to improve maintainability of an
              inherited, highly complex legacy codebase.
            </li>
          </ul>
        </ExpandableCardItem>
      </>
    ),
    expandableContent: (
      <>
        <ExpandableCardItem title='Key Achievements:'>
          <ul className='list-disc pl-6'>
            <li>
              Reduced technical debt by breaking down monolithic files of up to
              5,000 lines into smaller, maintainable units.
            </li>
            <li>
              Improved performance and cut hosting costs through caching and
              other optimizations.
            </li>
            <li>
              Delivered new features while simultaneously stabilizing the
              platform for production.
            </li>
          </ul>
        </ExpandableCardItem>

        <ExpandableCardItem title='Reflections:'>
          <p>
            Fabucar was my baptism by fire into large-scale, production-level
            development. Coming straight out of a bootcamp, I started in
            familiar territory with the React Native app, but quickly adapted to
            unfamiliar technologies and a sprawling Python backend. It taught me
            how to navigate messy legacy code while still delivering value,
            balance feature development with performance improvements, and
            collaborate directly with an external client&apos;s technical team.
            While the complexity and constraints made it a challenging
            environment, the adaptability and resilience I developed there
            became the foundation for tackling more ambitious projects later in
            my career.
          </p>
        </ExpandableCardItem>
      </>
    ),
    chips: [
      'React Native',
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Python',
      'SQLAlchemy',
      'Docker',
      'Stakeholder Management',
      'Technical Debt Reduction',
    ],
  },
];
